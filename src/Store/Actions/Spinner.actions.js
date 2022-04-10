export const ACTIONS = Object.freeze({
	startMainSpinner: "START_LOADING",
	stopMainSpinner: "STOP_LOADING",
});

// Actions
export function startMainSpinner() {
	return {
		type: ACTIONS.startMainSpinner
	}
}

export function stopMainSpinner() {
	return {
		type: ACTIONS.stopMainSpinner
	}
}

const exports = { SPINNER_ACTIONS: ACTIONS, startMainSpinner, stopMainSpinner };

export default exports;