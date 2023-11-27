/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { BooksRoutes } from '../modules/Books/books.route'
import { CategoriesRoutes } from '../modules/Categories/categories.routes'
import { SubCategoriesRoutes } from '../modules/SubCategories/subCategories.route'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/categories',
    route: CategoriesRoutes,
  },
  {
    path: '/subcategories',
    route: SubCategoriesRoutes,
  },
  {
    path: '/books',
    route: BooksRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
