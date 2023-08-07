import express from 'express'
const router = express.Router();
import studentControll from '../controllers/studentControl.js';

router.get('/',studentControll.getAllDoc)
router.post('/',studentControll.CreateDoc)
router.get('/edit/:id',studentControll.editDocById)
router.post('/update/:id',studentControll.updateDocById)
router.post('/delete/:id',studentControll.deleteDocById)


export default router   
