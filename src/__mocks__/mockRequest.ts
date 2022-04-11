import { Request } from 'express'
import { Params } from 'express-serve-static-core'

export function makeMockRequest ({ params, query, body }:
    { params?: Params, query?: Params, body?: Params }): Request {
  const request = {
    params: params || {},
    query: query || {},
    body: {}
  } as unknown

  return request as Request
}
