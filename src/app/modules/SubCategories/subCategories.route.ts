import express from 'express'

import validateRequest from '../../middlewares/validateRequest'
import { SubCategoriesController } from './subCategories.controller'
import { SubCategoriesValidation } from './subCategories.validation'

const router = express.Router()

router.post(
  '/create-subcategory',
  validateRequest(SubCategoriesValidation.createSubCategoriesZodSchema),
  SubCategoriesController.createSubCategory,
)
router.get('/:id', SubCategoriesController.getSubCategory)
router.patch(
  '/:id',
  validateRequest(SubCategoriesValidation.updateSubCategoriesZodSchema),
  SubCategoriesController.updateSubCategory,
)
router.delete('/:id', SubCategoriesController.deleteSubCategory)
router.get('/', SubCategoriesController.getSubCategories)

export const SubCategoriesRoutes = router
