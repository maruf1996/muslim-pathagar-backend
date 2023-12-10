import { NextFunction, Request, Response } from 'express'
import { BooksService } from './books.service'

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await BooksService.createBook(data)
    res.status(200).json({
      status: 'success',
      message: 'Book Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BooksService.getBooks()
    res.status(200).json({
      status: 'success',
      message: 'Books Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await BooksService.getBook(id)
    res.status(200).json({
      status: 'success',
      message: 'Book Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await BooksService.updateBook(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Book updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await BooksService.deleteBook(id)
    res.status(200).json({
      status: 'success',
      message: 'Book Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const totalBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BooksService.totalBooks()
    res.status(200).json({
      status: 'success',
      message: 'Books Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const BooksController = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  totalBooks,
}
