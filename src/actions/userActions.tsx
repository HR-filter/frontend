import { createAction } from '@reduxjs/toolkit';

export const setName = createAction<string>('user/setName');
export const setAvatar = createAction<string>('user/setAvatar');
export const addToFavorites = createAction<number>('user/addToFavorites'); // Добавить карточку в избранное
export const removeFromFavorites = createAction<number>(
  'user/removeFromFavorites',
); // Удалить карточку из избранного
export const addViewed = createAction<number>('user/addViewed'); // Добавить карточку в просмотренные
