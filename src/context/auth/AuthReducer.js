import {CLEAR_ERRORS} from '../types';
import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const {access, id, refresh} = action.payload;
      console.log('action.payload: ', action.payload);

      return {
        ...state,
        isSigned: true,
        access_token: access,
        user_id: id,
        refresh_token: refresh,
      };

    case types.LOGOUT:
      console.log('jkkjkjnkj');
      return {
        ...state,
        isSigned: false,
        loading: false,
        error: [],
      };

    default:
      return state;
  }
};
