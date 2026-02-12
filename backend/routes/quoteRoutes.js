const express = require('express');
const router = express.Router();
const multer = require('multer');
const supabase = require('../lib/supabase');

// Multer — store in memory for Supabase Storage upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf', '.png', '.jpg', '.jpeg', '.dxf', '.step', '.stp'];
    const ext = '.' + file.originalname.split('.').pop().toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('File type not allowed'), false);
    }
  },
});

// POST /api/quote — Submit a quote request
router.post('/', upload.single('drawingFile'), async (req, res) => {
  try {
    const { partDescription, material, quantity, deliveryDate } = req.body;

    // Validate required fields
    if (!partDescription || !material || !quantity || !deliveryDate) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (part description, material, quantity, delivery date)',
      });
    }

    let drawingFileUrl = null;

    // Upload file to Supabase Storage if provided
    if (req.file) {
      const fileName = `${Date.now()}-${req.file.originalname}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('drawings')
        .upload(fileName, req.file.buffer, {
          contentType: req.file.mimetype,
        });

      if (uploadError) {
        console.error('File upload error:', uploadError);
      } else {
        // Get public URL
        const { data: urlData } = supabase.storage
          .from('drawings')
          .getPublicUrl(fileName);
        drawingFileUrl = urlData.publicUrl;
      }
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('quotes')
      .insert([{
        part_description: partDescription,
        material: material,
        quantity: parseInt(quantity),
        delivery_date: deliveryDate,
        drawing_file_url: drawingFileUrl,
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to submit quote. Please try again.',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully! We will get back to you within 24 hours.',
      data: data[0],
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
});

// GET /api/quotes — Get all quotes (admin)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch quotes' });
    }

    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
