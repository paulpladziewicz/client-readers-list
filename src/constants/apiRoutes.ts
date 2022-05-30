import { getBaseUrl } from 'utils';

const BASE_URL = `${getBaseUrl()}/api`;

export const API_ROUTES = {
  REGISTER: BASE_URL + '/register',
  LOGIN: BASE_URL + '/login',
  LOGOUT: BASE_URL + '/logout',
  USER: BASE_URL + '/user',
  NY_BEST_SELLERS: BASE_URL + '/nytimes-bestsellers'
};
