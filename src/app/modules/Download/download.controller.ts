import { NextFunction, Request, Response } from 'express'
import { DownloadService } from './download.service'

const createCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...data } = req.body
    console.log(data)
    const result = await DownloadService.createCount(data)
    res.status(200).json({
      status: 'success',
      message: 'Count Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    console.log(data)
    const result = await DownloadService.updateCount(data, id)
    res.status(200).json({
      status: 'success',
      message: 'Count Update is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const result = await DownloadService.getCount(id)
    res.status(200).json({
      status: 'success',
      message: 'Count Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const DownloadController = {
  createCount,
  updateCount,
  getCount,
}
