import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import * as types from '../types';

const AuthState = props => {
  const initialState = {
    isSigned: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //logout
  const signOut = async () => {
    try {
      dispatch({
        type: types.LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signin = () => {
    dispatch({type: types.LOGIN_SUCCESS, payload: true});
  };

  return (
    <AuthContext.Provider
      value={{
        isSigned: state.isSigned,
        signin,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
