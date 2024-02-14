// AddNoteButton.js
import React from 'react';
import './AddNoteButton.css'; // Import the CSS file for styling

const AddNoteButton = ({ onClick }) => {
  return (
    <button className="add-note-button" onClick={onClick}>+</button> // Apply the CSS class
  );
};

export default AddNoteButton;
