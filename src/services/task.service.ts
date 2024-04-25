import httpStatus from 'http-status';
import { Task } from '../models';
import ApiError from '../utils/ApiError';

const createTask = async (taskBody: any): Promise<any> => {
  const task = await Task.create(taskBody);
  return task;
};

const getTaskById = async (id: string): Promise<any> => {
  const task = await Task.findById(id);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  return task;
};

const updateTask = async (id: string, updateBody: any): Promise<any> => {
  const task = await getTaskById(id);
  Object.assign(task, updateBody);
  await task.save();
  return task;
};

const deleteTask = async (id: string): Promise<void> => {
  await Task.findByIdAndDelete(id);
};

const taskService = {
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};

export default taskService;
