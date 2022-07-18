export const SET_TITLE = "SET_TITLE"
export const SET_EDITING = "SET_EDITING"
export const SET_NEWTITLETEXT = "SET_NEWTITLETEXT"

export default {
    setTitle: (title) => {
        return { type: SET_TITLE, payload: title}
    },
    setEditing: (isEditing) => {
        return { type: SET_EDITING, payload: isEditing}
    },
    setNewTitleText: (newTitleText) => {
        return { type: SET_NEWTITLETEXT, payload: newTitleText }
    }
}