const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Validate Supabase config on startup
const supabase = require('./lib/supabase');

const app = express();

// MANUAL CORS headers — runs FIRST on every single request
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  // Immediately respond to preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

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
