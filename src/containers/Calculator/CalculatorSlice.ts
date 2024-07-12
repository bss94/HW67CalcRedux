import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

interface CalculatorSlice {
  value: string;
}

const initialState: CalculatorSlice = {
  value: '',
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    reset: (state) => {
      state.value = '';
    },
    remove: (state) => {
      state.value = state.value.slice(0, -1);
    },
    add: (state, action: PayloadAction<string>) => {
      if (
        "*+/-".includes(action.payload) &&
        "*+/-".includes(state.value[state.value.length - 1])) {
        state.value = state.value.slice(0, -1).concat(action.payload);
      } else if (
        ("*+/-".includes(action.payload) && state.value.length !== 0) ||
        !"*+/-".includes(action.payload)
      ) {
        state.value = state.value.concat(action.payload);
      }
    },
    result: (state) => {
      try {
        if (!isFinite(eval(state.value))) {
          toast.success('result is infinity or NaN, set state to Initial');
          state.value = '';
        } else {
          state.value = String(eval(state.value));
        }
      } catch (e) {
        toast.error(e.message);
        state.value = '';
      }
    }
  },
});
export const calculatorReducer = calculatorSlice.reducer;
export const {
  reset,
  remove,
  add,
  result,
} = calculatorSlice.actions;