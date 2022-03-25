import React, { createContext, useReducer, Dispatch } from 'react';

type InitialStateType = {
  count: number;
};

const INITIAL_STATE = {
  count: 0,
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ADD = 'ADD',
  MINUS = 'MINUS',
}

type CounterPayload = {
  [Types.ADD]: {};
  [Types.MINUS]: {};
};

// export type CounterActions = ActionMap<CounterPayload>[keyof <CounterPayload>];

type Action = { type: 'ADD' } | { type: 'MINUS' };

export const counterReducer = (state = INITIAL_STATE, action: Action) => {
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

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export default Store;
