import React from "react";
import Note from "../note/Note";
import AddNote from "../addnote/AddNote";
import style from "./NoteList.module.css";

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleSelectNote }) => {
  return (
    <div className={style.notesList}>
      {notes.map((note) => (
        <Note 
          key={note.id}
          id={note.id} 
          title={note.title}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleSelectNote={() => handleSelectNote(note)}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
