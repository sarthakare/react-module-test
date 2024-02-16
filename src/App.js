import React, { useState, useEffect } from "react";
import AddNoteButton from "./Components/AddNoteButton";
import Note from "./Components/Note";
import { IoMdLock } from "react-icons/io";
import BackgroundImage from "./Images/background-image.png";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [groups, setGroups] = useState([]);

  // Fetch data from localStorage on mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);

    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  // Function to add a new note
  const addNote = () => {
    setNotes([...notes, <Note key={notes.length} />]);
  };

  // Render group list
  const groupList = groups.map((group, index) => (
    <div key={index} className="group" style={{ backgroundColor: group.color }}>
      <h3>{group.name}</h3>
    </div>
  ));

  return (
    <div className="container">
      <div id="addNotes">
        <h1>Pocket Notes</h1>
        {/* Render the list of groups */}
        <div className="group-list">
          {groupList}
        </div>
        <div id="addNoteButtonContainer">
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
