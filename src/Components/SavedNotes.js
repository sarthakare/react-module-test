// SavedNotes.js

import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./SavedNotes.css";
import disableEnter from "../Images/DisableButton.png";
import enableEnter from "../Images/EnableButton.png";

const SavedNotes = ({ groupName, groupColor, groupTitle }) => {
  const [notesText, setNotesText] = useState(""); 
  const [savedData, setSavedData] = useState([]); 
  const [isSmallScreen, setIsSmallScreen] = useState(false); 

  // Function to handle text input change
  const handleTextChange = (event) => {
    setNotesText(event.target.value);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-UK", options);
  };

  // Function to sav data to localStorage
  const handleSaveData = () => {
    const currentDate = new Date(); // Get current date and time
    const formattedDate = formatDate(currentDate);
    const currentTime = currentDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newData = {
      groupName: groupName,
      notes: notesText,
      dateTime: `${formattedDate}, ${currentTime}`,
    };
    const existingData = JSON.parse(localStorage.getItem("savedData")) || [];
    localStorage.setItem(
      "savedData",
      JSON.stringify([...existingData, newData])
    );
    setSavedData([...savedData, newData]);
    setNotesText(""); 
  };

  // Function to load data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("savedData")) || [];
    const filteredData = storedData.filter(
      (item) => item.groupName === groupName
    );
    setSavedData(filteredData);
  }, [groupName]);

  // Function to handle back button click
  const handleBackButtonClick = () => {
    window.location.href = "../App.js";
  };

  // Function to check if the screen size is small
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 600); 
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="savedNotesClass">
      <div className="savedNotesTitle">
        {isSmallScreen && (
          <IoArrowBack className="backButton" onClick={handleBackButtonClick} />
        )}
        <div id="savedNotesColor" style={{ backgroundColor: groupColor }}>
          {groupTitle}
        </div>
        <div id="savedNotesName">
          <h2>{groupName}</h2>
        </div>
      </div>
      <div className="notesInputBox">
        <textarea
          id="notesInput"
          type="text"
          placeholder="Here’s the sample text for sample work"
          value={notesText}
          onChange={handleTextChange}
        />
        {notesText ? (
          <img
            className="enterButton"
            id="enableEnter"
            src={enableEnter}
            alt="enableEnter"
            onClick={handleSaveData}
          />
        ) : (
          <img className="enterButton" src={disableEnter} alt="disableEnter" />
        )}
      </div>
      <div className="savedDataContainer">
        {savedData.map((item, index) => (
          <div key={index} className="noteItem">
            <p id="note">{item.notes}</p>
            <p id="dateTime">{item.dateTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedNotes;
