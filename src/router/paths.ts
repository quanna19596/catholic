import { TPathParams } from './types';

const PATHS = {
  LAYOUT: {
    LANDING: (): string => '/',
    DASHBOARD: (): string => '/dashboard'
  },
  PAGE: {
    SIGN_IN: (): string => '/sign-in',
    USERS: (): string => '/users',
    NOT_FOUND: (): string => '/not-found',
    PRODUCT_DETAIL: (params?: TPathParams): string => `/products/${params?.slug || ':slug'}`,
    HOME: (): string => `/`
  },
  SPECIAL: {
    EMPTY: (): string => '',
    ROOT: (): string => '/',
    REST: (): string => '*'
  }
};

export default PATHS;
