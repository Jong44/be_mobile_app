import express from 'express';
import {getAllUsers, createUser, signIn, getUserById} from '../controllers/UserController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/login', signIn);

export default router;