import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: String, enum: ['library', 'user-created'], default: 'user-created' },
  image_url:{ type: String, required: true}
});

const Template = mongoose.model('Template', templateSchema);

export default Template;