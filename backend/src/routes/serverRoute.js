<<<<<<< HEAD
=======
import express from 'express';
import ServerController from '../controllers/ServerController.js';

const router = express.Router();

router.post('/', ServerController.create);
router.patch('/', ServerController.update);
router.get('/', ServerController.getAllServers);
router.delete('/', ServerController.deleteServersById);
router.post('/:server_id/subscribe', ServerController.subscribe);

export default router;
>>>>>>> a7eeb9d0dc40989a4b9933b859d023878296b60f
