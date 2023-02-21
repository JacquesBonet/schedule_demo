import { useContext } from 'react'
import { AuthContext } from 'src/auth'
import {AuthValuesType} from "./types";

export const useAuth = ():AuthValuesType => useContext(AuthContext)
