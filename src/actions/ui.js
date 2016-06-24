import * as types from '../constants/actions';

/*actions*/

// action : incrementValue
export function incrementValue() {
	return {
	  type: types.INCREMENT_VALUE
	};
}
// action : decreaseValue
export function decreaseValue() {
	return {
	  type: types.DECREASE_VALUE
	};
}
