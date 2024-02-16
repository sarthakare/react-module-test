// App.js
import React, { useState, useEffect } from "react";
import AddNoteButton from "./Components/AddNoteButton";
import Note from "./Components/Note";
import SavedNotes from "./Components/SavedNotes"; // Import the SavedNotes component
import { IoMdLock } from "react-icons/io";
import BackgroundImage from "./Images/background-image.png";
import "./App.css";

// Function to get the first characters of each word in a string
function getFirstCharacters(inputString) {
  // Split the string into an array of words
  const words = inputString.split(" ");

  // Map over the array of words and get the first character of each word
  const firstCharacters = words.map((word) => word[0].toUpperCase());

  // Join the characters into a string
  const concatenatedString = firstCharacters.join("");

  // Return the first two characters of the concatenated string
  return concatenatedString.substring(0, 2);
}

const App = () => {
  const [notes, setNotes] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null); // State to keep track of selected group

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

  // Handle click event on group name
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  // Render group list with first characters
  const groupList = groups.map((group, index) => (
    <div key={index} className="group" onClick={() => handleGroupClick(group)}>
      <div id="group-color" style={{ backgroundColor: group.color }}>
        {/* Display the first characters of each word in group.name */}
        {getFirstCharacters(group.name)}
      </div>
      <div id="group-name">
        <h3>{group.name}</h3>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div id="addNotes">
        <h1>Pocket Notes</h1>
        {/* Render the list of groups */}
        <div className="group-list">{groupList}</div>
        <div id="addNoteButtonContainer">
          <AddNoteButton onClick={addNote} />
        </div>
        {notes}
      </div>
      <div id="showNotes">
        {selectedGroup && (
          <SavedNotes
            groupName={selectedGroup.name}
            groupColor={selectedGroup.color}
            groupTitle={getFirstCharacters(selectedGroup.name)}
          />
        )}{" "}
        {/* Render SavedNotes component if a group is selected */}
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
