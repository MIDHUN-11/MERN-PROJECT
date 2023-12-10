import express from 'express';
import {register,login,getProfile} from '../controllers/user.cotroller.js';
import isLoggedin from '../middleware/authenticaion.js';
const router = express.Router();
router.post('/register',register);
router.post('/login',login);//why are we using post for login? why not get bcoz get cant have req body
router.get('/getprofile',isLoggedin,getProfile);

export default router;