import React, { useState, useReducer } from 'react';

const Title = () => {
  const [title, setTitle] = useState('Hello earthlings!');
  const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  const handleEditing = () => {
    setEditing(!editing);
  }

  const handleFormSubmit = () => {
    setTitle(newTitleText);
    setEditing(false);
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