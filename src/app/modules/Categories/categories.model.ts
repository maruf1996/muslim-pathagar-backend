import { Schema, model } from 'mongoose'
import { CategoriesModel, ICategories } from './categories.interface'

const CategoriesSchema = new Schema<ICategories, CategoriesModel>(
  {
    title: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
)

export const Categories = model<ICategories, CategoriesModel>(
  'Categories',
  CategoriesSchema,
)
