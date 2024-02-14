// App.js
import React, { useState } from "react";
import AddNoteButton from "./Components/AddNoteButton";
import Note from "./Components/Note";
import { IoMdLock } from "react-icons/io"; // Import the lock icon
import BackgroundImage from "./Images/background-image.png";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, <Note key={notes.length} />]);
  };

  return (
    <div className="container">
      {/* Apply container class */}
      <div id="addNotes">
        <h1>Pocket Notes</h1>
        <div id="addNoteButtonContainer">
          {/* Container for AddNoteButton */}
          <AddNoteButton onClick={addNote} />
        </div>
        {notes}
      </div>
      <div id="showNotes">
        <div>
          <div id="backgroundImageCSS">
            <img id="backgroudImage" src={BackgroundImage} alt="wallpaper" />
            <h1>Pocket Notes</h1>
            <p id="text01">
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div id="text02">
            <IoMdLock />
            <p>end-to-end encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
