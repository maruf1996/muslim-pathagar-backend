import { Model } from 'mongoose'

export type ISubCategories = {
  title: string
}

export type SubCategoriesModel = Model<ISubCategories, Record<string, unknown>>
