import { lazy } from 'react';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

export const AppError = lazy(() => retryLoadComponent(() => import('@/pages/common/AppError')));
export const AppNotFound = lazy(() => retryLoadComponent(() => import('@/pages/common/AppNotFound')));
export const AppPermissionDenied = lazy(() => retryLoadComponent(() => import('@/pages/common/AppPermissionDenied')));

// [BEGIN] Public
export const Home = lazy(() => retryLoadComponent(() => import('@/pages/public/Home')));
export const News = lazy(() => retryLoadComponent(() => import('@/pages/public/News')));
// [END] Public

// [BEGIN] Private
export const Users = lazy(() => retryLoadComponent(() => import('@/pages/private/Users')));
export const NewsManagement = lazy(() => retryLoadComponent(() => import('@/pages/private/NewsManagement')));
export const NewsLayoutManagement = lazy(() => retryLoadComponent(() => import('@/pages/private/NewsLayoutManagement')));
export const PageLayoutManagement = lazy(() => retryLoadComponent(() => import('@/pages/private/PageLayoutManagement')));
export const CreateNews = lazy(() => retryLoadComponent(() => import('@/pages/private/CreateNews')));
export const EditNews = lazy(() => retryLoadComponent(() => import('@/pages/private/EditNews')));
export const EditPageLayout = lazy(() => retryLoadComponent(() => import('@/pages/private/EditPageLayout')));
// [END] Private
