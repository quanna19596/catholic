import { EBreakpoints, EDevice } from '@/enums';

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
