import axiosClient from './axiosClient';

const cityApi = {
  getAll() {
    const url = '/products';
    // const url = '/cities';
    return axiosClient.get(url);
  },
};

export default cityApi;
