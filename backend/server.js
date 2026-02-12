const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Validate Supabase config on startup
const supabase = require('./lib/supabase');

const app = express();

// CORS — allow frontend origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);

    const allowed = [
      'http://localhost:5173',
      'http://localhost:4173',
      process.env.FRONTEND_URL,
    ].filter(Boolean);

    // Allow exact matches
    if (allowed.includes(origin)) return callback(null, true);

    // Allow any *.vercel.app subdomain (covers previews and production)
    if (origin.endsWith('.vercel.app')) return callback(null, true);

    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const quoteRoutes = require('./routes/quoteRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/quote', quoteRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', async (req, res) => {
  const { data, error } = await supabase.from('quotes').select('id').limit(1);
  res.json({
    status: error ? 'ERROR' : 'OK',
    message: 'Sundaram Engineering API',
    database: error ? 'disconnected' : 'connected',
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Sundaram Engineering API — use /api/* endpoints' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
