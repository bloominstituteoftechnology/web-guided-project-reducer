import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";

const initialState = {
  currentValue: 5,
  memory: 0
}
export default function App() {

  //Action:
  //  Type: the name of the update we are making to the state.
  //  Payload: the data we would need to make that change.

 
  console.log("initialState", initialState)
  let newStateObject = reducer(initialState, subtractAction(4) )
  console.log("newStateObject", newStateObject)

  console.log("initialState after reducer call", initialState)

  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
