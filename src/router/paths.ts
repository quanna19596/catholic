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
    NEWS: (params?: TPathParams): string => `/${params?.category || ':category'}`,
    NEWS_MANAGEMENT: (): string => `/news`,
    NEWS_LAYOUT_MANAGEMENT: (): string => `/news-layout`,
    PAGE_LAYOUT_MANAGEMENT: (): string => `/page-layout`,
    CREATE_NEWS: (): string => `/news/create`,
    EDIT_NEWS: (params?: TPathParams): string => `/news/${params?.newsId || ':newsId'}`,
    EDIT_PAGE_LAYOUT: (params?: TPathParams): string => `/page-layout/${params?.page || ':page'}`
  },
  SPECIAL: {
    EMPTY: (): string => '',
    ROOT: (): string => '/',
    REST: (): string => '*'
  }
};

export default PATHS;
