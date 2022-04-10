import { ACTIONS } from "../Actions/AccessToken.actions";

// Reducers
export function accessTokenReducer(state = '', action = { type: '', value: '' }) {
	switch (action.type) {
		case ACTIONS.setAccessToken:
			return action.value;

		default:
			return state;
	}
}

export default accessTokenReducer;