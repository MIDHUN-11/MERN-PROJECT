import express from 'express';
import {register,login,getProfile} from '../controllers/user.cotroller.js'
const router = express.Router();
router.post('/register',register);
router.post('/login',login);//why are we using post for login? why not get
router.get('/getprofile',getProfile);

export default router;