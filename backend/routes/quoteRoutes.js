const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Quote = require('../models/Quote');

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'application/dxf',
    'application/step',
    'application/stp',
  ];
  // Accept most file types for engineering drawings
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

// POST /api/quote — Submit a new quote request
router.post('/', upload.single('drawingFile'), async (req, res) => {
  try {
    const { partDescription, material, quantity, deliveryDate } = req.body;

    // Validation
    if (!partDescription || !material || !quantity || !deliveryDate) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const quoteData = {
      partDescription,
      material,
      quantity: Number(quantity),
      deliveryDate: new Date(deliveryDate),
      drawingFile: req.file ? req.file.filename : null,
    };

    const quote = await Quote.create(quoteData);

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully!',
      data: quote,
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

// GET /api/quotes — List all quotes (admin)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: quotes.length,
      data: quotes,
    });
  } catch (error) {
    console.error('Fetch quotes error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

module.exports = router;
