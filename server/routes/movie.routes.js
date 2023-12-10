import {Router} from 'express';
import {createMovie,getMovies} from '../controllers/movie.controller.js'
const router = Router();
router.post('/',createMovie);
router.get('/list',getMovies);
export default router;