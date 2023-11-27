import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { BooksController } from './books.controller'
import { BooksValidation } from './books.validation'

const router = express.Router()

router.post(
  '/create-book',
  validateRequest(BooksValidation.createBooksZodSchema),
  BooksController.createBook,
)
router.get('/:id', BooksController.getBook)
router.patch(
  '/:id',
  validateRequest(BooksValidation.updateBooksZodSchema),
  BooksController.updateBook,
)
router.delete('/:id', BooksController.deleteBook)
router.get('/', BooksController.getBooks)

export const BooksRoutes = router
