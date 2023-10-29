import { createReducer } from '@reduxjs/toolkit';
import { setName, setAvatar } from '../actions/userActions';
import avatarPath from '../assets/images/demoUserAvatar.jpeg';

interface UserState {
  name: string;
  avatar: string;
}

const initialState: UserState = {
  name: 'Мария',
  avatar: avatarPath,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setAvatar, (state, action) => {
      state.avatar = action.payload;
    });
});

export default userReducer;
