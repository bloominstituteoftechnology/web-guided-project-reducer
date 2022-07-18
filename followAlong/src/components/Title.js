import React, { useState, useReducer } from 'react';
import reducer from '../reducers/titleReducer';
import actions from '../actions/titleActions';

const initialState = {
  title: "Hello earthlings!",
  editing: false,
  newTitleText: ''
}
const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState)
  const { title, editing, newTitleText } = state;
  const {setTitle, setEditing, setNewTitleText } = actions;

  const handleChanges = e => {
    dispatch(setNewTitleText(e.target.value));
  };

  const handleEditing = () => {
    dispatch(setEditing(!editing));
  }

  const handleFormSubmit = () => {
    dispatch(setTitle(newTitleText));
    dispatch(setEditing(false));
  }

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;