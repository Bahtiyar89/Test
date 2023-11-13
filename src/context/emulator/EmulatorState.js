import React, {useReducer} from 'react';
import {useToast} from 'react-native-toast-notifications';

import EmulatorContext from './EmulatorContext';
import EmulatorReducer from './EmulatorReducer';

import {LOADING_DETECTOR, GET_HISTORY, CLEAR_DETECTOR} from '../types';

const EmulatorState = props => {
  const toast = useToast();
  const initialState = {
    emulator: false,
    error: false,
  };

  const [state, dispatch] = useReducer(EmulatorReducer, initialState);

  //GET History
  const getTransactionsByWallet = async keys => {};

  //Clean Profile
  const cleanDetector = async () => {
    dispatch({type: CLEAR_DETECTOR});
  };

  return (
    <EmulatorContext.Provider
      value={{
        emulator: state.emulator,
        error: state.error,
        getTransactionsByWallet,
        cleanDetector,
      }}>
      {props.children}
    </EmulatorContext.Provider>
  );
};

export default EmulatorState;
