export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload)
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case "CLEAR_ALL":
      return { transactions: [], darkMode: state.darkMode };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};
