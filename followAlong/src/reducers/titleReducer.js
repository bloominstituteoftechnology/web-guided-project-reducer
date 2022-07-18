// (state, action) => newState
import { SET_EDITING, SET_TITLE, SET_NEWTITLETEXT } from "../actions/titleActions";

console.log("const set_editing:", SET_EDITING)
const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return({...state, title: action.payload});
        case(SET_EDITING):
            return({...state, editing: action.payload});
        case(SET_NEWTITLETEXT):
            return({...state, newTitleText: action.payload});
        default:
            return state;
    }
}

export default reducer;