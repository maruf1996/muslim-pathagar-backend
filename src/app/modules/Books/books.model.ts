import { Schema, model } from 'mongoose'
import { BooksModel, IBooks } from './books.interface'

const BookSchema = new Schema<IBooks, BooksModel>(
  {
    name: { type: String, required: true, unique: true },
    writer: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    subcategory: { type: String },
  },
  {
    timestamps: true,
  },
)

export const Books = model<IBooks, BooksModel>('Books', BookSchema)
