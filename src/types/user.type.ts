type UserType = {
  address?: string
  email?: string
  firstName?: string
  lastName?: string
  number?: number | string
  password?: string
}

const initialUser: UserType = {
  address: '',
  email: '',
  firstName: '',
  lastName: '',
  number: '',
}

export type {
  UserType,
}

export {
  initialUser
}
