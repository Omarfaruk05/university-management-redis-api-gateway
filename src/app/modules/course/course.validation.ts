import { z } from 'zod';

const createCourseZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    code: z.string({
      required_error: 'Code is required'
    }),
    credits: z.number({
      required_error: 'Credits is required'
    }),
    coursePreRequisites: z
      .array(
        z.object({
          courseId: z.string({})
        })
      )
      .optional()
  })
});

const updateCourseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    credits: z.number().optional(),
    coursePreRequisites: z
      .array(
        z.object({
          courseId: z.string({}),
          isDeleted: z.boolean({}).optional()
        })
      )
      .optional()
  })
});

const assignOrRemoveFacultiesZodSchema = z.object({
  body: z.object({
    faculties: z.array(z.string(), {
      required_error: 'Faculties are required'
    })
  })
});

export const CourseValidation = {
  createCourseZodSchema,
  updateCourseZodSchema,
  assignOrRemoveFacultiesZodSchema
};