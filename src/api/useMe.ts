import {UserType} from "../types/user.type";
import {useGetOne} from "./useFetch";
import {useAuth, userId} from "../auth";
import {UseQueryResult} from "@tanstack/react-query";
import {ErrorType} from "../types/error.type";
import {usePut} from "./usePost";

export const useMe = ():UseQueryResult<UserType, ErrorType> => (
  useGetOne<UserType>('users', userId(useAuth()?.accessToken))
)


export const usePutMe = () => (
  usePut<UserType>('users', userId(useAuth()?.accessToken))
)
