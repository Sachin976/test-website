import { axiosInstance } from './index';

export const getAPI = (url: string) => axiosInstance.get(url);

/**
 *
 * To Post Api Request Call
 *
 * @param {String} url - URL String of API
 * @param {Object} data - Data for Post
 *
 **/
export const postAPI = (url: string, data: any) =>
  axiosInstance.post(url, data);

/**
 *
 * To Put Api Request Call
 *
 * @param {String} url - URL String of API
 * @param {Object} data - Data for Update
 *
 **/
export const putAPI = (url: string, data: any) => axiosInstance.put(url, data);

/**
 *
 * To Delete Api Request Call
 *
 * @param {String} url - URL String of API
 *
 **/
export const deleteAPI = (url: string) => {
  return axiosInstance.delete(url);
};
