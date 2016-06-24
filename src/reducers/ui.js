import * as types from '../constants/actions'

/*

	Reducer for .
	Gets previous state as first argument, action as second.

	Should only return new state based on action & previous state.

*/


//  initial state, what to return on init
const initialState = {
  value: 0
};


export default function (state = initialState, action) {
  switch (action.type) {

	/*reducers*/
	case types.INCREMENT_VALUE:
		// state == old state
		return Object.assign({}, state, {
			// new state
      value: state.value + 1
		});

  case types.DECREASE_VALUE:
		// state == old state
		return Object.assign({}, state, {
			// new state
      value: state.value - 1
		});


  default:
    return state
	}
}
