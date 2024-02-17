import React, { useState, useEffect, useRef } from "react";
import "./PopUp.css";

const Popup = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
  const [groups, setGroups] = useState([]);
  const [changesMade, setChangesMade] = useState(false);
  const popupRef = useRef(null);

  // Handle click outside the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Load groups from local storage
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    setGroups(storedGroups || []);
  }, []);

  // Save groups to local storage
  useEffect(() => {
    if (changesMade) {
      localStorage.setItem("groups", JSON.stringify(groups));
      setChangesMade(false); 
    }
  }, [groups, changesMade]);

  // Handle group creation
  const handleCreateGroup = () => {
    if (!groupName || !groupColor) {
      alert("Please enter a group name and choose a color.");
      return;
    }

    const newGroup = {
      name: groupName,
      color: groupColor,
    };

    setGroups([...groups, newGroup]);
    setGroupName(""); 
    setGroupColor("");
    setChangesMade(true);
    window.location.reload();
  };

  // Handle color selection
  const handleColorChange = (color) => {
    setGroupColor(color);
    setChangesMade(true);
  };

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup-content">
        <h3>Create New Group</h3>
        <div id="groupName">
          <h3>Group Name</h3>
          <input
            id="groupNameInput"
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          />
        </div>
        <div id="chooseColor">
          <h3>Choose Colour</h3>
          <div id="titleColor">
            <button
              className={`color ${groupColor === "#b38bfa" ? "active" : ""}`}
              style={{
                backgroundColor: "#b38bfa",
                border: groupColor === "#b38bfa" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#b38bfa")}
            ></button>
            <button
              className={`color ${groupColor === "#ff79f2" ? "active" : ""}`}
              style={{
                backgroundColor: "#ff79f2",
                border: groupColor === "#ff79f2" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#ff79f2")}
            ></button>
            <button
              className={`color ${groupColor === "#43e6fc" ? "active" : ""}`}
              style={{
                backgroundColor: "#43e6fc",
                border: groupColor === "#43e6fc" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#43e6fc")}
            ></button>
            <button
              className={`color ${groupColor === "#f19576" ? "active" : ""}`}
              style={{
                backgroundColor: "#f19576",
                border: groupColor === "#f19576" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#f19576")}
            ></button>
            <button
              className={`color ${groupColor === "#0047ff" ? "active" : ""}`}
              style={{
                backgroundColor: "#0047ff",
                border: groupColor === "#0047ff" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#0047ff")}
            ></button>
            <button
              className={`color ${groupColor === "#6691ff" ? "active" : ""}`}
              style={{
                backgroundColor: "#6691ff",
                border: groupColor === "#6691ff" ? "3px solid black" : null,
              }}
              onClick={() => handleColorChange("#6691ff")}
            ></button>
          </div>
        </div>
        <button id="createBtn" onClick={handleCreateGroup}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Popup;
