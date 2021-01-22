import { Router } from 'express';
import BeersController from './controllers/BeerController'

const routes = Router();

routes.post('/beers', BeersController.create)

routes.get('/beers', async (request, response) => {
    BeersController.index(request, response);
})

routes.get('/beers/:id', async (request, response) => {
    BeersController.show(request, response);
})
export default routes;