const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');

// POST /api/contact — Submit a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, message)',
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again.',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      data: data[0],
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
});

// GET /api/contact — Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
    }

    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
