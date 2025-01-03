import express from 'express';
import {getInvestments, getInvestmentById, createInvestment, getInvestmentByUserId} from '../controllers/InvestmentController.js';
import multer from 'multer';
import fs from 'fs';

const router = express.Router();
// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync('./uploads')) {
          fs.mkdirSync('./uploads');
        }
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname.replace(/\s/g, ''));
    }
  });  
  const upload = multer({ storage });

router.get('/', getInvestments);
router.post('/', upload.single('file'), createInvestment);
router.get('/:id', getInvestmentById);
router.get('/user/:id', getInvestmentByUserId);





export default router;
