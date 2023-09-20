import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getSingleFromDB);
router.post(
  '/',
  validateRequest(academicSemesterValidation.createZodSchema),
  AcademicSemesterController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateZodSchema),
  AcademicSemesterController.updateOneIntoDB
);
router.delete('/:id', AcademicSemesterController.deleteOneFromDB);

export const AcademicSemesterRoutes = router;
