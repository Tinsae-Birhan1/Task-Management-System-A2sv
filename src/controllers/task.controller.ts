import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { taskService } from '../services';

const createTask = catchAsync(async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body);
  res.status(httpStatus.CREATED).send(task);
});

const getTaskById = catchAsync(async (req: Request, res: Response) => {
  const task = await taskService.getTaskById(req.params.id);
  res.status(httpStatus.OK).send(task);
});

const updateTask = catchAsync(async (req: Request, res: Response) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.status(httpStatus.OK).send(task);
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  await taskService.deleteTask(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

const taskController = {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};

export default taskController;
