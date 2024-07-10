import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorSlice {
  value:string;
}
const initialState:CalculatorSlice={
  value:'',
}
export const calculatorSlice = createSlice({
  name:'calculator',
  initialState,
  reducers: {
    reset:(state)=>{
      state.value =''
    },
    remove:(state)=>{
      state.value = state.value.slice(0,-1)
    },
    add:(state,action:PayloadAction<string>)=>{
      state.value = state.value.concat(action.payload)
    },
    result:(state)=>{
      state.value = String(eval(state.value));
    }
  },
})
export const calculatorReducer = calculatorSlice.reducer
export const {
  reset,
  remove,
  add,
  result,
}=calculatorSlice.actions;