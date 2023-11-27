export type IGenericErrorMessage = {
  path: string | number
  message: string
}

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
  //   errorMessage: {
  //     path: string
  //     message: string
  //   }[]
}
