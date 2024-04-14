import { createSlice } from '@reduxjs/toolkit';

import { getDeviceType } from '@/utils';

export const uiSlice = createSlice({
  name: 'petStore/pet',
  initialState: {
    device: {
      type: getDeviceType(),
      width: window.innerWidth
    }
  },
  reducers: {
    setDevice: (state, action) => ({
      ...state,
      device: {
        type: getDeviceType(),
        width: action.payload.deviceWidth
      }
    })
  }
});
