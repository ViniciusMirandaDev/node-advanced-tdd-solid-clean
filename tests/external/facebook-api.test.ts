import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
  })

  it('should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: 'EAAfX9dYeJ1cBO7oteIeQnZBqTPR6XhmWH1ATAHBtEBLKuSHjoIiMfwrtZCkq2i2sLBbjTpuLpsZByFcKtjUqz5D1BZCojgreKEx7ldIZBlZC1e9qZBDmRRU6GpZACoHdRiYtasal89ArhI01uIMFP6o1XwLF6OMPz0g8Er9ZBEi8D6cHgm3sUhAbB5A0A8DCx9PxqSZAixk11q6ZAHZBT1yCt8ZAwvIuMDQx1eejLbyB2CKRZAoso77RZCzVarZAuyTqYeWogksZD' })

    expect(fbUser).toEqual({
      facebookId: '1506284633319513',
      email: 'baptistamanda21@gmail.com',
      name: 'Amanda Miranda'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
