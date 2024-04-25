import express from 'express';
import { RequestHandler } from 'express';
import { taskController } from '../controllers';
import authMiddleware from '../middlewares/auth';

const router = express.Router();

router.post(
  '/tasks',
  authMiddleware,
  taskController.createTask as RequestHandler,
);

router.get(
  '/tasks/:id',
  authMiddleware,
  taskController.getTaskById as RequestHandler,
);

router.put(
  '/tasks/:id',
  authMiddleware,
  taskController.updateTask as RequestHandler,
);

router.delete(
  '/tasks/:id',
  authMiddleware,
  taskController.deleteTask as RequestHandler,
);

export default router;

