import { createReducer } from '@reduxjs/toolkit';
import {
  setName,
  setAvatar,
  addToFavorites,
  removeFromFavorites,
  addViewed,
} from '../actions/userActions';
import avatarPath from '../assets/images/demoUserAvatar.jpeg';

interface UserState {
  name: string;
  avatar: string;
  favoriteCardIds: number[];
  viewed: number[];
}

const initialState: UserState = {
  name: 'Мария',
  avatar: avatarPath,
  favoriteCardIds: [2, 4, 5],
  viewed: [1, 2, 4],
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setAvatar, (state, action) => {
      state.avatar = action.payload;
    })
    .addCase(addToFavorites, (state, action) => {
      const cardId = action.payload;
      if (!state.favoriteCardIds.includes(cardId)) {
        state.favoriteCardIds.push(cardId);
      }
    })
    .addCase(removeFromFavorites, (state, action) => {
      const cardId = action.payload;
      state.favoriteCardIds = state.favoriteCardIds.filter(
        (id) => id !== cardId,
      );
    })
    .addCase(addViewed, (state, action) => {
      const cardId = action.payload;
      if (!state.viewed.includes(cardId)) {
        state.viewed.push(cardId);
      }
    });
});

export default userReducer;
