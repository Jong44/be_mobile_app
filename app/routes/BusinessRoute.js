import express from 'express';
import {getAllBusiness, getBusinessById, getBusinessLogo, getVideoPitchDeck} from '../controllers/BusinessController.js';

const router = express.Router();

router.get('/', getAllBusiness);
router.get('/:id', getBusinessById);
router.get('/blob/logo/:id', getBusinessLogo);
router.get('/blob/pitchdeck/:id', getVideoPitchDeck);

export default router;