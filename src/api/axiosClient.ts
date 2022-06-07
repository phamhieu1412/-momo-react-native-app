import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const axiosClient = axios.create({
  // baseURL: 'http://js-post-api.herokuapp.com/api',
  baseURL: 'https://5de902c2cb3e3800141b8c9d.mockapi.io/shopee',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Làm gì đó trc khi gửi req lên server
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    console.log('x1', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// sẽ làm gì đó khi nhận được res và trả về cho hàm chạy api đó
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('x1', response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('x1 er', error);
    return Promise.reject(error);
  },
);

export default axiosClient;
