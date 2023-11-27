import { ICategories } from './categories.interface'
import { Categories } from './categories.model'

const createCategory = async (payload: ICategories): Promise<ICategories> => {
  const result = await Categories.create(payload)
  return result
}

const getCategories = async (): Promise<ICategories[]> => {
  const result = await Categories.find()
  return result
}

const getCategory = async (id: string): Promise<ICategories | null> => {
  const result = await Categories.findById(id)
  return result
}

const updateCategory = async (
  id: string,
  payload: Partial<ICategories>,
): Promise<ICategories | null> => {
  const result = await Categories.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteCategory = async (id: string): Promise<ICategories | null> => {
  const result = await Categories.findByIdAndDelete(id)
  return result
}

export const CategoriesService = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
}
