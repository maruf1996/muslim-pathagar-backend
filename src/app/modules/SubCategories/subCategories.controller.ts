import { NextFunction, Request, Response } from 'express'
import { SubCategoriesService } from './subCategories.service'

const createSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await SubCategoriesService.createSubCategory(data)
    res.status(200).json({
      status: 'success',
      message: 'SubCategory Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSubCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await SubCategoriesService.getSubCategories()
    res.status(200).json({
      status: 'success',
      message: 'SubCategories Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await SubCategoriesService.getSubCategory(id)
    res.status(200).json({
      status: 'success',
      message: 'SubCategory Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await SubCategoriesService.updateSubCategory(id, data)
    res.status(200).json({
      status: 'success',
      message: 'SubCategory updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await SubCategoriesService.deleteSubCategory(id)
    res.status(200).json({
      status: 'success',
      message: 'SubCategory Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const SubCategoriesController = {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
}
