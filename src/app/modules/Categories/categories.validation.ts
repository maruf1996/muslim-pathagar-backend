import { z } from 'zod'

const createCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    link: z.string({ required_error: 'link is required' }),
  }),
})

const updateCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    link: z.string().optional(),
  }),
})

export const CategoriesValidation = {
  createCategoriesZodSchema,
  updateCategoriesZodSchema,
}
