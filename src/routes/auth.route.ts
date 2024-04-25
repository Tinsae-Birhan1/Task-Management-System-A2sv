import express from 'express';
import { RequestHandler } from 'express';
import { authController } from '../controllers';

const router = express.Router();

router.post(
  '/auth/register',
  authController.register as RequestHandler,
);

router.post(
  '/auth/login',
  authController.login as RequestHandler,
);

router.post(
  '/auth/refresh-token',
  authController.refreshToken as RequestHandler,
);
router.post(
  '/users', 
authController.createUser
);
router.get(
  '/users/:id', 
  authController.getUserById
);
router.put(
  '/users/:id', 
  authController.updateUser
);
router.delete(
  '/users/:id', authController.deleteUser
);

export default router;
