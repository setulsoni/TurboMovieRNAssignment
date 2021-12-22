import { TYPES } from '../actions/UserActions';

export const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN:
      return { ...state, ...payload.user };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};
