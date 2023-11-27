import { ISubCategories } from './subCategories.interface'
import { SubCategories } from './subCategories.model'

const createSubCategory = async (
  payload: ISubCategories,
): Promise<ISubCategories> => {
  const result = await SubCategories.create(payload)
  return result
}

const getSubCategories = async (): Promise<ISubCategories[]> => {
  const result = await SubCategories.find()
  return result
}

const getSubCategory = async (id: string): Promise<ISubCategories | null> => {
  const result = await SubCategories.findById(id)
  return result
}

const updateSubCategory = async (
  id: string,
  payload: Partial<ISubCategories>,
): Promise<ISubCategories | null> => {
  const result = await SubCategories.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteSubCategory = async (
  id: string,
): Promise<ISubCategories | null> => {
  const result = await SubCategories.findByIdAndDelete(id)
  return result
}

export const SubCategoriesService = {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
}
