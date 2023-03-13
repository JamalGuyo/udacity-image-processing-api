import express from 'express';
import images from './images/images';
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main /api endpoint');
})

routes.use('/images', images)

export default routes;