import { Document, Model, Types } from 'mongoose'

export type IDownload = {
  _id: Types.ObjectId
  count: number
} & Document

export type DownloadModel = Model<IDownload, Record<string, unknown>>
