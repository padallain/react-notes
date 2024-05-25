import React from "react";
import Note from "../note/Note";
import style from "./NoteList.module.css";
import AddNote from "../addnote/AddNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className={style.notesList}>
      {notes.map((note) => (
        <Note 
        key={note.id} 
        id={note.id} 
        text={note.text} 
        date={note.date}
        handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote className={style.notesList} handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
