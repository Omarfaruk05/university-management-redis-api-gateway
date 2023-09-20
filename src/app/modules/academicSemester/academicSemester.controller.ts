import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneFromDB
};
