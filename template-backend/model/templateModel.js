const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: String, enum: ['library', 'user-created'], default: 'user-created' },
});

const Template = mongoose.model('Template', templateSchema);
module.exports = Template;
