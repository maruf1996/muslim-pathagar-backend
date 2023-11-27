import { NextFunction, Request, Response } from 'express'
import { CategoriesService } from './categories.service'

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await CategoriesService.createCategory(data)
    res.status(200).json({
      status: 'success',
      message: 'Category Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await CategoriesService.getCategories()
    res.status(200).json({
      status: 'success',
      message: 'Categories Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await CategoriesService.getCategory(id)
    res.status(200).json({
      status: 'success',
      message: 'Category Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await CategoriesService.updateCategory(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Category updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await CategoriesService.deleteCategory(id)
    res.status(200).json({
      status: 'success',
      message: 'Category Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const CategoriesController = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
}
