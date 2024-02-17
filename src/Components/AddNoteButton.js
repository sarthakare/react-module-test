// AddNoteButton.js
import "./AddNoteButton.css";
import React, { useState } from "react";
import Popup from "./PopUp";

const AddNoteButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id="addNote">
      <button id="add-note-button" onClick={togglePopup}>
        +
      </button>
      {showPopup && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default AddNoteButton;
