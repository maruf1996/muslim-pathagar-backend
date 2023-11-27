import { Model } from 'mongoose'

export type ICategories = {
  title: string
  link: string
}

export type CategoriesModel = Model<ICategories, Record<string, unknown>>
