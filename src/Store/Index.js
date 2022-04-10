import { createStore, combineReducers } from "redux";
import AccessTokenReducer from "./Reducers/AccessToken.reducer";
import SpinnerReducer from "./Reducers/Spinner.reducer";
import CounterReducer from "./Reducers/Counter.reducer";

const allReducers = {
	accessToken: AccessTokenReducer,
	spinner: SpinnerReducer,
	counter: CounterReducer,
};

// Store
export const store = createStore(combineReducers(allReducers));

export default store;