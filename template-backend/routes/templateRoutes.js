import {Router} from 'express'
import { getTemplates,createTemplate,updateTemplate } from '../controller/templateController.js';

const router = Router();

router.get('/templates',getTemplates);
router.post('/createTemplate',createTemplate);
router.put('/templates/:id',updateTemplate);

export default router;