import jwt from "jsonwebtoken";
import {getUrl} from "../api/env";

const userId = (accessToken: string | undefined ): string | undefined => {
  if (!accessToken)
    return undefined

  // @ts-ignore
  const decodedAccessToken = jwt.decode(accessToken, { complete: true })

  if (!decodedAccessToken || !decodedAccessToken.payload || !decodedAccessToken.payload.sub)
    return undefined

  // @ts-ignore
  return decodedAccessToken.payload.sub
}

const meEndpoint = (accessToken: string | undefined ) => `${getUrl('users')}/${userId(accessToken)}`

const loginEndpoint = () => getUrl('login')

const registerEndpoint = () => getUrl('register')

const accessTokenKeyName = 'accessToken'

const onTokenExpiration = 'refreshToken' // logout | refreshToken

export {
  userId,
  onTokenExpiration,
  accessTokenKeyName,
  registerEndpoint,
  meEndpoint,
  loginEndpoint,
}
