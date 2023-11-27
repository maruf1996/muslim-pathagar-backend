import { IBooks } from './books.interface'
import { Books } from './books.model'

const createBook = async (payload: IBooks): Promise<IBooks> => {
  const result = await Books.create(payload)
  return result
}

const getBooks = async (): Promise<IBooks[]> => {
  const result = await Books.find()
  return result
}

const getBook = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findById(id)
  return result
}

const updateBook = async (
  id: string,
  payload: Partial<IBooks>,
): Promise<IBooks | null> => {
  const result = await Books.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteBook = async (id: string): Promise<IBooks | null> => {
  const result = await Books.findByIdAndDelete(id)
  return result
}

export const BooksService = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
}
