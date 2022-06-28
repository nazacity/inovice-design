import Axios, { AxiosRequestConfig } from 'axios';
import getConfig from 'next/config';
import { parseCookies } from 'nookies';

const timeout = 60000;

const { publicRuntimeConfig } = getConfig();

const setAuthenticatedHeaders = async () => {
  const cookies = parseCookies();
  let headers = {};
  if (cookies.access_token) {
    headers = {
      Authorization: `Bearer ${cookies.access_token}`,
    };
  }

  return headers;
};

const authenticatedRequest = Axios.create({
  baseURL: publicRuntimeConfig.BASE_API_URL ?? process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout,
});

const onRequestInterceptor = async (config: AxiosRequestConfig) => {
  const headers = await setAuthenticatedHeaders();

  config.headers = headers;

  return config;
};

authenticatedRequest.interceptors.request.use(onRequestInterceptor);

export default authenticatedRequest;
