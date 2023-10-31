import { createReducer } from '@reduxjs/toolkit';
import {
  setName,
  setAvatar,
  addToFavorites,
  removeFromFavorites,
} from '../actions/userActions';
import avatarPath from '../assets/images/demoUserAvatar.jpeg';

interface UserState {
  name: string;
  avatar: string;
  favoriteCardIds: number[];
}

const initialState: UserState = {
  name: 'Мария',
  avatar: avatarPath,
  favoriteCardIds: [2, 4, 5],
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
    });
});

export default userReducer;
