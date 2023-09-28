import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.createStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.insertIntoDB
);

router.get('/', StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.updateStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteByIdFromDB
);

export const studentEnrolledCourseRoutes = router;
