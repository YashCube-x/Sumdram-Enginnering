const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  partDescription: {
    type: String,
    required: [true, 'Part description is required'],
    trim: true,
  },
  material: {
    type: String,
    required: [true, 'Material is required'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
  deliveryDate: {
    type: Date,
    required: [true, 'Delivery date is required'],
  },
  drawingFile: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quote', quoteSchema);
