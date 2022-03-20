import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  count: 0,
};

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1,
      };
    case 'MINUS':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(INITIAL_STATE);
export default Store;
