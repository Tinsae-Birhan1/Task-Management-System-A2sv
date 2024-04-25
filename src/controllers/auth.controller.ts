import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { userService, tokenService, authService } from '../services';

const register = catchAsync(async (req: Request, res: Response) => {

  const user = await userService.createUser(req.body);
  // generate token
  const tokens = await tokenService.generateAuthTokens(user.id);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.login(
    email,
    password,
    req.connection.remoteAddress,
  );
  // generate token
  const tokens = await tokenService.generateAuthTokens(user.id);
  res.status(httpStatus.OK).send({ user, tokens });
});

const refreshToken = catchAsync(async (req, res) => {
    const tokens = await authService.refreshAuthToken(req.body.refreshToken);
    res.status(httpStatus.OK).send({ ...tokens });
  });
  

  const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  });
  
  const getUserById = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).send(user);
  });
  
  const updateUser = catchAsync(async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).send(user);
  });
  
  const deleteUser = catchAsync(async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  });
  

const authController = {
    register,
    login,
    refreshToken,
    createUser,
  getUserById,
  updateUser,
  deleteUser,
  };
  
  export default authController;
  