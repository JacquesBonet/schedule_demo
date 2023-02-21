export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type RegisterParams = {
  email: string
  firstName: string
  lastName: string
  password: string
}

export type AuthValuesType = {
  accessToken: string | undefined,
  logout: () => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
