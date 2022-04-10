export const ACTIONS = Object.freeze({
	setAccessToken: "SET_ACCESS_TOKEN",
});

// Actions
export function setAccessToken(accessToken = '') {
	return {
		type: ACTIONS.setAccessToken,
		value: accessToken,
	}
}
const exports = { ACESS_TOKEN_ACTIONS: ACTIONS, setAccessToken };

export default exports;