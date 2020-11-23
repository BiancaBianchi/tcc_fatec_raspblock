import {Router} from 'express';
import projectsControllers from './controllers/projectsControllers';


const routes = Router()

routes.post('/createproject', projectsControllers.create )

routes.get('/send-projects', projectsControllers.index )

export default routes;