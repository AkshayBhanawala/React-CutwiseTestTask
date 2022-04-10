import { ACTIONS } from "../Actions/Counter.actions";

// Reducers
export function counterReducer(state = 0, action = '') {
	switch (action.type) {
		case ACTIONS.increase:
			return state + 1;

		case ACTIONS.decrease:
			return state - 1;

		default:
			return state;
	}
}

export default counterReducer;