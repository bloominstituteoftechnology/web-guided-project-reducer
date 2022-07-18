import { ADD, SUBTRACT, CLEAR, ADD_TO_MEMORY, MULTIPLY } from './../actions/calcActions.js';

const reducer = (state, action) => {
  console.log("state inside reducer:", state)
  console.log("action object inside reducer:", action)
    switch (action.type) {
      case ADD:
        return { ...state, currentValue: state.currentValue + action.payload };
      case SUBTRACT:
        return { ...state, currentValue: state.currentValue - action.payload };
      case CLEAR:
        return { ...state, currentValue: 0 };
      case ADD_TO_MEMORY:
        return { ...state, memory: state.currentValue };
      case MULTIPLY:
        return { ...state, currentValue: state.currentValue * action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  