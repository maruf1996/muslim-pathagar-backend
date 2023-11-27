import { Schema, model } from 'mongoose'
import { ISubCategories, SubCategoriesModel } from './subCategories.interface'

const SubCategoriesSchema = new Schema<ISubCategories, SubCategoriesModel>(
  {
    title: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
)

export const SubCategories = model<ISubCategories, SubCategoriesModel>(
  'SubCategories',
  SubCategoriesSchema,
)
