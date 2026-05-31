import { Router } from 'express';
import { GetUserController } from './controllers/getUserControlles.js';
const router = Router();


router.get('/user', new GetUserController().handle)






export { router }; 