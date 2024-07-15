import { combineReducers } from 'redux';
import pricesReducer from "@/store/slices/pricesSlice";

const rootReducer = combineReducers({
  prices: pricesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
