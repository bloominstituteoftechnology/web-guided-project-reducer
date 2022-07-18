let addAction = (value) => {
    return { type: "ADD", payload: value }
  }

  let subtractAction = (value) => {
    return { type: "SUBTRACT", payload: value }
  }

  let saveToMemoryAction = () => {
    return { type: "ADD_TO_MEMORY" }
  }

  let clearAction = () => {
      return { type: "CLEAR"}
  }

export default {
    addAction: addAction,
    subtractAction: subtractAction,
    clearAction: clearAction,
    saveToMemoryAction: saveToMemory
}