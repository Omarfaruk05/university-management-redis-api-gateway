import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';

const router = express.Router();

router.post(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarksZodSchema),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-course-final-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarksZodSchema),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
