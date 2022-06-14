import {Alert} from 'react-native';
// import AsyncStorageService from '@react-native-community/async-storage';
import {ResponseType} from '../interfaces/ApiResponse';
import axios, {AxiosResponse} from 'axios';
// import {store} from '../redux/store';

const APIInstant = axios.create();
const createAPI = () => {
  APIInstant.interceptors.request.use(async (config: any) => {
    // const accountState = store.getState().accountSlice;
    // console.log(accountState, 'acc');
    config.baseURL = 'https://5de902c2cb3e3800141b8c9d.mockapi.io/shopee';
    config.headers = {
      // Authorization: await AsyncStorageService.getToken(),
      'Content-Type': 'application/json',
      // locale: accountState.language,
      // type_model: PARENTS_ROLE,
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
      Alert.alert(message);
      return Promise.reject(error);
    },
  );
  return APIInstant;
};
const createAPINoToken = () => {
  APIInstant.interceptors.request.use(async (config: any) => {
    config.baseURL = 'https://5de902c2cb3e3800141b8c9d.mockapi.io/shopee';
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
      Alert.alert(message);
      return Promise.reject(error);
    },
  );
  return APIInstant;
};
const axiosClient = createAPI();
const axiosClientWithoutToken = createAPINoToken();
// function handleResult<T>(api: any, generic?: T) {
function handleResult<T>(api: any) {
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
    handleResult(axiosClient.delete(url, {data: payload})),
};
export const ApiClientWithoutToken = {
  get: (url: string, payload?: any) =>
    handleResult(axiosClientWithoutToken.get(url, payload)),
};
