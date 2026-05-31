import { Router } from 'express';
import { GetUserController } from './controllers/getUserControlles';
const router = Router();


router.get('/user', new GetUserController().handle)






export { router }; 