import { Schema, model } from 'mongoose'
import { DownloadModel, IDownload } from './download.interface'

const DownloadSchema = new Schema<IDownload, DownloadModel>(
  {
    count: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

export const Download = model<IDownload, DownloadModel>(
  'Download',
  DownloadSchema,
)
