export const ADD = "ADD"
export const SUBTRACT = "SUBTRACT"
export const ADD_TO_MEMORY = "ADD_TO_MEMORY"
export const CLEAR = "CLEAR"
export const MULTIPLY = "MULTIPLY"

let addAction = (value) => {
    return { type: ADD, payload: value }
  }

  let subtractAction = (value) => {
    return { type: SUBTRACT, payload: value }
  }

  let saveToMemoryAction = () => {
    return { type: ADD_TO_MEMORY }
  }

  let clearAction = () => {
      return { type: CLEAR}
  }

  let multiplyAction = (value) => {
      return { type: MULTIPLY, payload: value}
  }

export default {
    addAction: addAction,
    subtractAction: subtractAction,
    clearAction: clearAction,
    saveToMemoryAction: saveToMemoryAction,
    multiplyAction: multiplyAction
}