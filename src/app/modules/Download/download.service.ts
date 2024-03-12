import { IDownload } from './download.interface'
import { Download } from './download.model'

const createCount = async (payload: IDownload): Promise<IDownload> => {
  const result = await Download.create(payload)
  return result
}

const updateCount = async (
  payload: IDownload,
  id: string,
): Promise<IDownload | null> => {
  const result = await Download.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const getCount = async (id: string) => {
  console.log(id)
  const result = await Download.findById(id)
  return result
}

export const DownloadService = {
  createCount,
  updateCount,
  getCount,
}
