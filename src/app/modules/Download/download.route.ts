import express from 'express'
import { DownloadController } from './download.controller'

const router = express.Router()

router.post('/:id', DownloadController.updateCount)
router.get('/:id', DownloadController.getCount)
router.post('/', DownloadController.createCount)

export const DownloadRoutes = router
