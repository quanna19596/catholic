import { MouseEvent } from 'react';

import { EBreakpoints, EDevice } from '@/enums';
import { history, PATHS } from '@/router';
import { TBlog } from '@/types';

export const randomEnumValue = (enumeration: { [key: string]: any }): any => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};

export const objectIsEmpty = (obj?: Record<string, unknown>): boolean => {
  return obj ? Object.keys(obj).length === 0 : true;
};

export const getArrayFrom0To = (numb: number): number[] => {
  return Array(numb)
    .fill('')
    .map((_, i) => i);
};

export const getDeviceType = (): EDevice => {
  const windowWidth = window.innerWidth;

  if (windowWidth > EBreakpoints.XXL) return EDevice.TV;
  if (windowWidth > EBreakpoints.XL && windowWidth <= EBreakpoints.XXL) return EDevice.LARGE_DESKTOP;
  if (windowWidth > EBreakpoints.LG && windowWidth <= EBreakpoints.XL) return EDevice.DESKTOP;
  if (windowWidth > EBreakpoints.MD && windowWidth <= EBreakpoints.LG) return EDevice.LARGE_TABLET;
  if (windowWidth > EBreakpoints.SM && windowWidth <= EBreakpoints.MD) return EDevice.TABLET;

  return EDevice.MOBILE;
};

export const handleClickAnchor = (event: MouseEvent<HTMLAnchorElement>): void => {
  const isPreviewInDashboard = window.location.pathname.includes(PATHS.LAYOUT.DASHBOARD());
  event.preventDefault();
  if (!isPreviewInDashboard) history.push(event.currentTarget.href);
};

export const getBlogsRendered = ({ max, blogs }: { max: number; blogs: (TBlog | undefined)[] }): (TBlog | undefined)[] => {
  const maxBlogs = max;
  const blogSlots = getArrayFrom0To(maxBlogs);
  const blogsRendered = blogSlots.map((_, slotIdx) => blogs[slotIdx] || undefined);
  return blogsRendered;
};

export const dummyBlog = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
  thumbnail: 'https://via.placeholder.com/210x150',
  url: 'https://google.com',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
};
