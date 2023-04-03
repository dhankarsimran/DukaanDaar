import express from 'express';
import { loginController, registerController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post('/signup',registerController);

//LOGIN || POST
router.post('/login',loginController);

// test routes
router.get('/test',requireSignIn,isAdmin,testController);

export default router;