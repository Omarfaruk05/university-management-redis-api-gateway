import { Request, Response, NextFunction } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('faruk');
    const result = await UserService.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin
};
