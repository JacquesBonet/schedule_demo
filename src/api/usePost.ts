import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { getUrl } from './env';
import {accessTokenKeyName} from "../auth";

export const usePost = ( resource:string, options = {}) => {
  const accessToken = localStorage.getItem(accessTokenKeyName)
  const requestOptions = {
    headers: {
      Authorization: accessToken
    }
  };

  return useMutation(
    (payload) => {
      return axios.post(getUrl(resource), payload, requestOptions);
    },
    options)
}

export const usePut = <T>( resource:string, id: number | string | undefined, options = {}) => {
  const accessToken = localStorage.getItem(accessTokenKeyName)
  const requestOptions = {
    headers: {
      Authorization: accessToken
    }
  };

  return useMutation(
    (payload: T) => {
      return axios.put(getUrl(resource + '/' + id), payload, requestOptions);
    },
    options)
}
