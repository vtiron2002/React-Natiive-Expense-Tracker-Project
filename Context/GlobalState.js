import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [],
  darkMode: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = id => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = transaction => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const toggleDarkMode = () => {
    dispatch({type: 'TOGGLE_DARK_MODE'})
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearAll,
        darkMode: state.darkMode,
        toggleDarkMode
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
