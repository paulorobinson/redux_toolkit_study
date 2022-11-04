import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

interface CounterStateProps {
  value: number;
}

const initialState: CounterStateProps = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;

const mockAPIResponse = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const asyncIncrementAmount = () => {
  return async (dispatch: AppDispatch) => {
    await mockAPIResponse(1000);
    dispatch(increment());
  };
};
