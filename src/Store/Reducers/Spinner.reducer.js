import { ACTIONS } from "../Actions/Spinner.actions";

// Reducers
export function mainSpinnerReducer(state = false, action = { type: '' }) {
	switch (action.type) {
		case ACTIONS.startMainSpinner:
			return true;

		case ACTIONS.stopMainSpinner:
			return false;

		default:
			return state;
	}
}

export default mainSpinnerReducer;