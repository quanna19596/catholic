import { LoginForm } from '@/containers';
import {
  DashboardLayout,
  DashboardLayoutDefault,
  DashboardLayoutError,
  DashboardLayoutNotFound,
  DashboardLayoutPermissionDenied,
  LandingLayout,
  LandingLayoutDefault,
  LandingLayoutError,
  LandingLayoutNotFound
} from '@/layouts';
import {
  AppError,
  AppNotFound,
  AppPermissionDenied,
  CreateNews,
  EditNews,
  EditPageLayout,
  News,
  NewsLayoutManagement,
  NewsManagement,
  PageLayoutManagement,
  Users
} from '@/pages';
import { TRouteConfig } from '@/router';

import PATHS from './paths';

const routerConfig: TRouteConfig = {
  common: {
    appError: AppError,
    appNotFound: AppNotFound,
    appPermissionDenied: AppPermissionDenied
  },
  routes: [
    {
      path: PATHS.LAYOUT.LANDING(),
      element: {
        component: LandingLayout
      },
      children: [
        {
          element: {
            index: true,
            component: LandingLayoutDefault,
            errorComponent: LandingLayoutError
          }
        },
        {
          path: PATHS.PAGE.NEWS(),
          element: {
            component: News,
            errorComponent: LandingLayoutError
          }
        },
        {
          path: PATHS.SPECIAL.REST(),
          element: {
            component: LandingLayoutNotFound,
            errorComponent: LandingLayoutError
          }
        }
      ]
    },
    {
      path: PATHS.LAYOUT.DASHBOARD(),
      element: {
        component: DashboardLayout,
        isPrivate: true,
        fallbackPermissionDenied: LoginForm
      },
      children: [
        {
          element: {
            index: true,
            component: DashboardLayoutDefault,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.USERS(),
          element: {
            component: Users,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.NEWS_MANAGEMENT(),
          element: {
            component: NewsManagement,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.NEWS_LAYOUT_MANAGEMENT(),
          element: {
            component: NewsLayoutManagement,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.PAGE_LAYOUT_MANAGEMENT(),
          element: {
            component: PageLayoutManagement,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.CREATE_NEWS(),
          element: {
            component: CreateNews,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.EDIT_NEWS(),
          element: {
            component: EditNews,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.PAGE.EDIT_PAGE_LAYOUT(),
          element: {
            component: EditPageLayout,
            isPrivate: true,
            fallbackPermissionDenied: DashboardLayoutPermissionDenied,
            errorComponent: DashboardLayoutError
          }
        },
        {
          path: PATHS.SPECIAL.REST(),
          element: {
            component: DashboardLayoutNotFound,
            errorComponent: DashboardLayoutError
          }
        }
      ]
    }
  ]
};

export default routerConfig;
