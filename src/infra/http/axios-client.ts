import { HttpGetClient } from '@/infra/http'

import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get ({ params, url }: HttpGetClient.Params): Promise<any> {
    const result = await axios.get(url, { params })
    return result.data
  }
}
