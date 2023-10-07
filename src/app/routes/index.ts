import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { roomRoutes } from '../modules/room/room.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { CourseRoutes } from '../modules/course/course.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.rotue';
import { AuthenticationRoutes } from '../modules/auth/auth.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { adminRoutes } from '../modules/admin/admin.route';
import { managementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { studentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthenticationRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/faculties',
    routes: FacultyRoutes
  },
  {
    path: '/students',
    routes: studentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/admins',
    routes: adminRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
