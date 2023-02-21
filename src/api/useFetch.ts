import axios from 'axios';
import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getUrl} from './env';
import {accessTokenKeyName} from "../auth";
import {ErrorType} from "../types/error.type";

export const useGet = <T>(resource:string):UseQueryResult<T, ErrorType> => (
  useQuery([resource], () => queryFn<T>(getUrl(resource)))
)

export const useGetOne = <T>(resource:string, id: string | number | undefined):UseQueryResult<T, ErrorType> => (
  useQuery<T, ErrorType>([resource, id], () => queryFn<T>(getUrl(`${resource}/${id}`)))
)

const queryFn = async <T>(url:string) => {
  const accessToken = localStorage.getItem(accessTokenKeyName)
  const requestOptions = {
    headers: {
      Authorization: accessToken
    }
  };

  return axios.get<T>(url, requestOptions).then(response => response.data)
};
