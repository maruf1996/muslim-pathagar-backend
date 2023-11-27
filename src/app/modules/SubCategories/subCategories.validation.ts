import { z } from 'zod'

const createSubCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
  }),
})

const updateSubCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
})

export const SubCategoriesValidation = {
  createSubCategoriesZodSchema,
  updateSubCategoriesZodSchema,
}
