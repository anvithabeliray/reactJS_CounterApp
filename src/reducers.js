

import { INCREMENT, DECREMENT, RESET } from './actions';

const initialState = {
  number: 0
};

function reducer(state = initialState, action) {
  
switch(action.type) {

  case INCREMENT:
    return {
      number: state.number + 1
    };

  case DECREMENT:
    return {
      number: state.number - 1  
    };

    case RESET:
      return {
        number: state.number=0       
      }
      
  default:
    return state;
  }
}

export default reducer;