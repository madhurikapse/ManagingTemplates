const express = require('express');
const router = express.Router();
const { getTemplates, createTemplate, updateTemplate } = require('../controller/templateController.js');

router.get('/api/templates',getTemplates);
router.post('/api/templates',createTemplate);
router.put('/api/templates/:id',updateTemplate);
router.get('/test',(req,res)=>{
res.send("send")
})
module.exports = router;
