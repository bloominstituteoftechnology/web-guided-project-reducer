import React, { useEffect, useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";

import actions from "./actions/calcActions";

const initialState = {
  currentValue: 5,
  memory: 0
}
export default function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)
  //reducer has to follow this pattern: (state, action) => newState
  
  //Action:
  //  Type: the name of the update we are making to the state.
  //  Payload: the data we would need to make that change.

 
  // console.log("initialState", initialState)
  // let newStateObject = reducer(initialState, actions.multiplyAction(8) )
  // console.log("newStateObject", newStateObject)

  // console.log("initialState after reducer call", initialState)

  const handleAdd = () => {
    dispatch(actions.addAction(2))
  }

  const handleSubtract = () => {
    dispatch(actions.subtractAction(5))
  }

  const handleClear = () => {
    dispatch(actions.clearAction())
  }

  console.log("state from useReducer", state)

  useEffect(() => {
    console.log("i rerendered!")
  })
  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn" onClick={handleAdd}>
        + 2
      </button>
      <button type="button" className="btn" onClick={handleSubtract}>
        - 5
      </button>
      <button type="button" className="btn" onClick={handleClear}>
        CE
      </button>
    </div>
  );
}
