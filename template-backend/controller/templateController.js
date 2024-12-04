import Template from "../model/templateModel.js";

// // Get all templates
export const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching templates' });
  }
};

// // Create a new template
export const createTemplate = async (req, res) => {
  try {
    const { name, content } = req.body;
    const newTemplate = new Template({ name, content });
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (err) {
    res.status(500).json({ message: 'Error creating template' });
  }
};

// // Update a template
export const updateTemplate = async (req, res) => {
  const { id } = req.params;
  const { name, content,image_url } = req.body;
  try {
    const template = await Template.findById(id);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    template.name = name;
    template.content = content;
    template.image_url=image_url;
    await template.save();
    res.status(200).json(template);
    
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error updating template' });
  }
};
// Delete a template
export const deleteTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const template = await Template.deleteOne({_id:id});
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }
    await template.remove();
    res.status(200).json({ message: 'Template deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting template' });
  }
};
