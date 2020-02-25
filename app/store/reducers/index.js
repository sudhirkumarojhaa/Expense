import {
  SAVE_DAILY_EXPENSE,
  SAVE_TO_DATABASE,
  REMOVE_EXPENSE,
  HIGHLIGHT_EXPENSE,
  CLEAR_EXPENSE,
  CLEAR_DATABASE,
  SAVE_TOTAL_AMOUNT,
  CLEAR_TOTAL_AMOUNT,
} from '../actions/types';

const initialState = {
  dailyExpense: [],
  database: [],
  totalAmount: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DAILY_EXPENSE:
      return {
        ...state,
        dailyExpense: [...state.dailyExpense, action.payload],
      };

    case SAVE_TO_DATABASE:
      return {
        ...state,
        database: [...state.database, action.payload],
      };

    case REMOVE_EXPENSE:
      const newData = state.dailyExpense.filter(
        expense => expense.key !== action.payload,
      );
      return {
        ...state,
        dailyExpense: newData,
      };

    case HIGHLIGHT_EXPENSE:
      const highlightedData = state.dailyExpense.map(item => {
        if (item.key === action.payload) {
          item.show = !item.show;
        }
        return item;
      });
      return {
        ...state,
        dailyExpense: highlightedData,
      };

    case CLEAR_EXPENSE:
      return {
        ...state,
        dailyExpense: [],
      };

    case CLEAR_DATABASE:
      return {
        ...state,
        database: [],
      };

    case SAVE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };

    case CLEAR_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default Reducer;
