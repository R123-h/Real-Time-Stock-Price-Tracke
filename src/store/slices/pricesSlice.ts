import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Price {
  _id: string;
  price: number;
  timestamp: string;
  symbol: string;
}

interface PricesState {
  data: Price[];
  selectedStock: string;
}

const initialState: PricesState = {
  data: [],
  selectedStock: "pancakeswap",
};

const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    setPrices(state, action: PayloadAction<Price[]>) {
      state.data = action.payload;
    },
    setSelectedStock(state, action: PayloadAction<string>) {
      state.selectedStock = action.payload;
    },
  },
});

export const { setPrices, setSelectedStock } = pricesSlice.actions;
export default pricesSlice.reducer;
