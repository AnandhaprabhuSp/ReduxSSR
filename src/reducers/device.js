import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

const initialState = {
    isMobile: false
}

export default function device(state = initialState, action) {
  
    console.log(action, 'action');
    return Object.assign({}, state, action.data)
}
