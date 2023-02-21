import {useAuth} from "../../auth";

const LogoutPage = () => {
  const auth = useAuth()

  auth.logout()

  return null
}

export default LogoutPage
