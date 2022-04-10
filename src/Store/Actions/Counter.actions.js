export const ACTIONS = Object.freeze({
	increase: "INCREASE",
	decrease: "DECREASE",
});

// Actions
export function increase() {
	return {
		type: ACTIONS.increase
	}
}

export function decrease() {
	return {
		type: ACTIONS.decrease
	}
}

const exports = { COUNTER_ACTIONS: ACTIONS, increase, decrease };

export default exports;