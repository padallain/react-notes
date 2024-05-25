import React, { useState } from 'react';
import style from './AddNote.module.css';

const AddNote = ({ handleAddNote}) => {
  const [noteText, setNoteText] = useState("");  // State for note text

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    if(noteText.trim().length>0){
      handleAddNote(noteText)
    }
    
    event.preventDefault(); // Prevent default form submission behavior
    /* console.log("Saving note:", noteText); // Replace with your saving logic */
    setNoteText(""); // Clear note text after submission
  };

  return (
    <div className={`${style.noteNew} `}>
      <textarea 
        rows="8" 
        cols="10" 
        placeholder="Type to add a note..." 
        value={noteText} // Set value from state
        onChange={handleChange} 
      />
      <div className={style.noteFooter}>
        <small>{200 - noteText.length} remaining</small>  
        <button className={style.save} onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}

export default AddNote;
