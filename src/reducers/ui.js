import * as types from '../constants/actions'

/*

	Reducer for .
	Gets previous state as first argument, action as second.

	Should only return new state based on action & previous state.

*/


//  initial state, what to return on init
const initialState = {};


export default function (state = initialState, action) {
  switch (action.type) {

	/*reducers*/
	case types.TOGGLE_MENU:
		// state == old state
		return Object.assign({}, state, {
			// new state

		})


  default:
    return state
	}
}
