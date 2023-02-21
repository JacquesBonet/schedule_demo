// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/components/spinner'

// ** Hook Imports
import { useAuth } from 'src/auth'

export const getHomeRoute = (): string => (
  '/calendar'
)

const Home = () => {
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    auth?.accessToken && router.replace(getHomeRoute())
  }, [auth])

  return <Spinner />
}

export default Home
