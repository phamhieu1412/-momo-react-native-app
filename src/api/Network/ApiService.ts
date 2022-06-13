import R from '@assets/R';
import { NavigationUtils } from '@navigation/NavigationUtils';
import { showConfirm, showMessages } from '@utils/AlertHelper';
import { API_URL, PARENTS_ROLE, SCREEN_ROUTER_APP } from '@utils/constants';
import { Alert } from 'react-native';
import reactotron from 'reactotron-react-native';
import AsyncStorageService from '../AsyncStorage/AsyncStorageService';
import { ResponseType } from './model/ApiResponse';
import axios, { AxiosResponse } from 'axios';
import {  store } from '../../redux/store';

const APIInstant = axios.create();
const createAPI = () => {
  APIInstant.interceptors.request.use(async (config: any) => {
    const accountState = store.getState().accountSlice
    console.log(accountState,'acc')
    config.baseURL = API_URL.DEV;
    config.headers = {
      Authorization: await AsyncStorageService.getToken(),
      'Content-Type': 'application/json',
      locale:accountState.language,
      type_model:PARENTS_ROLE,
      ...config.headers,
    };
    return config;
  });
  APIInstant.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    error => {
      const message = error?.response?.data?.message;
      showMessages(message);
      return Promise.reject(error);
    },
  );
  return APIInstant;
};
const createAPINoToken = ()=>{
  APIInstant.interceptors.request.use(async (config: any) => {
    config.baseURL = API_URL.DEV;
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    return config;
  });
  APIInstant.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    error => {
      const message = error?.response?.data?.message;
      return Promise.reject(error);
    },
  );
  return APIInstant;
}
const axiosClient = createAPI();
const axiosClientWithoutToken = createAPINoToken();
function handleResult<T>(api: any, generic?: T) {
  return api.then((res: any) => handleResponse<T>(res.data));
}
function handleResponse<T>(data: ResponseType<T>) {
  return Promise.resolve(data);
}
export const ApiClient = {
  get: (url: string, payload?: any) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload?: any) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload?: any) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload: any) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload?: any) =>
    handleResult(axiosClient.delete(url, { data: payload })),
};
export const ApiClientWithoutToken = {
  get: (url: string, payload?: any) =>
    handleResult(axiosClientWithoutToken.get(url, payload)),
}