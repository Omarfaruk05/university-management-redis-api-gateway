import { z } from 'zod';
import { SemesterRegistrationStatus } from '../../../enums/semesterRegistration';

const createSemesterRegistrationZodSchema = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'Start date is required'
    }),
    endDate: z.string({
      required_error: 'End date is required'
    }),
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required'
    }),
    minCredit: z.number({
      required_error: 'Min credit is required'
    }),
    maxCredit: z.number({
      required_error: 'Max credit is required'
    })
  })
});

const updateSemesterRegistrationZodSchema = z.object({
  body: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    academicSemesterId: z.string().optional(),
    status: z
      .enum([...Object.values(SemesterRegistrationStatus)] as [string, ...string[]], {})
      .optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional()
  })
});

const enrollIntoCourseZodSchema = z.object({
  body: z.object({
    offeredCourseId: z.string({
      required_error: 'Student id is required'
    }),
    offeredCourseSectionId: z.string({
      required_error: 'Student id is required'
    })
  })
});

const withdrawFromCourseZodSchema = z.object({
  body: z.object({
    semesterRegistrationId: z.string().optional(),
    studentId: z.string().optional(),
    offeredCourseId: z.string().optional(),
    offeredCourseSectionId: z.string().optional()
  })
});

export const SemesterRegistrationValidation = {
  createSemesterRegistrationZodSchema,
  updateSemesterRegistrationZodSchema,
  enrollIntoCourseZodSchema,
  withdrawFromCourseZodSchema
};