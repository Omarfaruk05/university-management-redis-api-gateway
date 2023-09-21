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

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
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
    path: '/users',
    routes: UserRoutes
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
    path: '/semester-registrations',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/offered-courses',
    routes: OfferedCourseRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
