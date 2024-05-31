import React from 'react';
import style from './SideBar.module.css';
import NoteList from '../notelist/NoteList';

const SideBar = ({ notes, handleAddNote, handleDeleteNote, handleSelectNote }) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <h1>Quick notes</h1>
      </div>
      <div className={style.sidebarNotes}>
        <NoteList 
          notes={notes}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
          handleSelectNote={handleSelectNote}
        />
      </div>
    </div>
  );
}

export default SideBar;
