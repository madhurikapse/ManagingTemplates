const Template = require("../model/templateModel");


// Get all templates
exports.getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching templates' });
  }
};

// Create a new template
exports.createTemplate = async (req, res) => {
  try {
    const { name, content } = req.body;
    const newTemplate = new Template({ name, content });
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(500).json({ message: 'Error creating template' });
  }
};

// Update a template
exports.updateTemplate = async (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;
  try {
    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    template.name = name;
    template.content = content;
    await template.save();
    res.status(200).json(template);
  } catch (err) {
    res.status(500).json({ message: 'Error updating template' });
  }
};
