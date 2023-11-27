import { Model } from 'mongoose'

export type IBooks = {
  name: string
  writer: string
  link: string
  category: string
  subcategory?: string
}

export type BooksModel = Model<IBooks, Record<string, unknown>>
