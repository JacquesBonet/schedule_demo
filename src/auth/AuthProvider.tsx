// ** React Imports
import {createContext, useEffect, useState, ReactNode} from 'react'

// ** Next Import
import {useRouter} from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import { loginEndpoint, meEndpoint, registerEndpoint, accessTokenKeyName} from './helpers'

// ** Types
import {AuthValuesType, RegisterParams, LoginParams, ErrCallbackType} from './types'
import {getHomeRoute} from "../pages";

// ** Defaults
const defaultProvider: AuthValuesType = {
  accessToken: undefined,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({children}: Props) => {
  // ** States
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)

  // ** Hooks
  const router = useRouter()

  const initAuth = async (): Promise<void> => {
    const accessToken = window.localStorage.getItem(accessTokenKeyName)
    if (accessToken) {
      await axios
        .get(meEndpoint(accessToken), {
          headers: {
            Authorization: accessToken
          }
        })
        .then(async () => {
          setAccessToken(accessToken)
        })
        .catch(() => {
          window.localStorage.removeItem(accessTokenKeyName)
          setAccessToken(undefined)
          if (!router.pathname.includes('login')) {
            router.replace('/login')
          }
        })
    } else {
      await router.replace('/login')
    }
  }

  useEffect(() => {
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(loginEndpoint(), params)
      .then(async response => {
        window.localStorage.setItem(accessTokenKeyName, response.data.accessToken)
        await initAuth()

        // @ts-ignore
        await router.replace(router.query.returnUrl || getHomeRoute())
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setAccessToken(undefined)
    window.localStorage.removeItem(accessTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(registerEndpoint(), params)
      .then(res => {
        if (res.data.error && errorCallback) errorCallback(res.data.error)
        else
          router.push('/login')
      })
      .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    accessToken,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}
