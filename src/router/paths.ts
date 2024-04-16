import { TPathParams } from './types';

const PATHS = {
  LAYOUT: {
    LANDING: (): string => '/',
    DASHBOARD: (): string => '/dashboard'
  },
  PAGE: {
    USERS: (): string => '/users',
    NOT_FOUND: (): string => '/not-found',
    HOME: (): string => `/`,
    NEWS: (params?: TPathParams): string => `/${params?.category || ':category'}`
  },
  SPECIAL: {
    EMPTY: (): string => '',
    ROOT: (): string => '/',
    REST: (): string => '*'
  }
};

export default PATHS;
