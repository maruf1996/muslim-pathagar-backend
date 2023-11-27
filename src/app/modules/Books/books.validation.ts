import { z } from 'zod'

const createBooksZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    writer: z.string({ required_error: 'writer is required' }),
    link: z.string({ required_error: 'link is required' }),
    category: z.string({ required_error: 'category is required' }),
    subcategory: z.string().optional(),
  }),
})

const updateBooksZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    writer: z.string().optional(),
    link: z.string().optional(),
    category: z.string().optional(),
    subcategory: z.string().optional(),
  }),
})

export const BooksValidation = {
  createBooksZodSchema,
  updateBooksZodSchema,
}
