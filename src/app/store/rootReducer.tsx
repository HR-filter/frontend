import { combineReducers } from 'redux';
import userReducer from '../../reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // Другие редьюсеры, если есть
});

export default rootReducer;
