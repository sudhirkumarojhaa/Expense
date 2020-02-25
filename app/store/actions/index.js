/* eslint-disable no-unused-vars */
import {
  SAVE_DAILY_EXPENSE,
  SAVE_TO_DATABASE,
  SAVE_TOTAL_AMOUNT,
  REMOVE_EXPENSE,
  HIGHLIGHT_EXPENSE,
  CLEAR_EXPENSE,
  CLEAR_DATABASE,
  CLEAR_TOTAL_AMOUNT,
} from './types';

export const saveDailyExpense = data => ({
  type: SAVE_DAILY_EXPENSE,
  payload: data,
});

export const saveToDatabase = data => ({
  type: SAVE_TO_DATABASE,
  payload: data,
});

export const removeExpense = data => {
  return {
    type: REMOVE_EXPENSE,
    payload: data,
  };
};

export const highlightExpense = key => {
  return {
    type: HIGHLIGHT_EXPENSE,
    payload: key,
  };
};

export const clearExpense = () => {
  return {
    type: CLEAR_EXPENSE,
  };
};

export const clearDatabase = () => {
  return {
    type: CLEAR_DATABASE,
  };
};

export const saveTotalAmount = data => ({
  type: SAVE_TOTAL_AMOUNT,
  payload: data,
});

export const clearTotalAmount = () => {
  return {
    type: CLEAR_TOTAL_AMOUNT,
  };
};
