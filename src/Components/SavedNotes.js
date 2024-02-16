// SavedNotes.js
import React from "react";
import "./SavedNotes.css";

const SavedNotes = ({ groupName, groupColor, groupTitle }) => {
  return (
    <div>
      <div className="savedNotesTitle">
        <div id="savedNotesColor" style={{ backgroundColor: groupColor }}>
          {groupTitle}
        </div>
        <div id="savedNotesName">
          <h2>{groupName}</h2>
        </div>
      </div>
    </div>
  );
};

export default SavedNotes;
