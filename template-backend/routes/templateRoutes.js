import {Router} from 'express'
import { getTemplates,createTemplate,updateTemplate, deleteTemplate } from '../controller/templateController.js';

const router = Router();

router.get('/templates',getTemplates);
router.post('/createTemplate',createTemplate);
router.put('/templates/:id',updateTemplate);
router.delete('/templates/:id',deleteTemplate);

export default router;