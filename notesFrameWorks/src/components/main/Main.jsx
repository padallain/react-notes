import React, { useState, useEffect } from 'react';
import style from './Main.module.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const Main = ({ selectedNote, handleUpdateNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setNoteTitle(selectedNote.title);
      setNoteText(selectedNote.text);
    }
  }, [selectedNote]);

  const handleSave = () => {
    if (selectedNote) {
      handleUpdateNote(selectedNote.id, {
        ...selectedNote,
        title: noteTitle,
        text: noteText,
      });
    }
  };

  if (!selectedNote) {
    return <div className={style.main}>Select a note to edit</div>;
  }

  return (
    <div className={style.container}>
      <input
        type="text"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        placeholder="Note Title"
        className={style.titleInput}
      />
      <ReactQuill
        value={noteText}
        onChange={setNoteText}
        className={style.editorContainer}
      />
      <button onClick={handleSave} className={style.saveButton}>
        Save
      </button>
    </div>
  );
};

export default Main;
    