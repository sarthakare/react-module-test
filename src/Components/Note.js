import React, { useState } from 'react';

const Note = () => {
  const [note, setNote] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <textarea value={note} onChange={handleChange} />
    </div>
  );
};

export default Note;
