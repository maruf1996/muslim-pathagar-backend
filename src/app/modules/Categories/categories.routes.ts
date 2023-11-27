import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { CategoriesController } from './categories.controller'
import { CategoriesValidation } from './categories.validation'

const router = express.Router()

router.post(
  '/create-category',
  validateRequest(CategoriesValidation.createCategoriesZodSchema),
  CategoriesController.createCategory,
)
router.get('/:id', CategoriesController.getCategory)
router.patch(
  '/:id',
  validateRequest(CategoriesValidation.updateCategoriesZodSchema),
  CategoriesController.updateCategory,
)
router.delete('/:id', CategoriesController.deleteCategory)
router.get('/', CategoriesController.getCategories)

export const CategoriesRoutes = router
