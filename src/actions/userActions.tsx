import { createAction } from '@reduxjs/toolkit';

export const setName = createAction<string>('user/setName');
export const setAvatar = createAction<string>('user/setAvatar');
