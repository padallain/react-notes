import React, { useState } from "react";
import { nanoid } from "nanoid";
import appFireBase from "../credencials";
import style from "./Home.module.css";
import { getAuth, signOut } from "firebase/auth";
import Search from "./search/Search";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import Main from "./main/Main";

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Months are 0-indexed, so add 1
const currentYear = today.getFullYear();
const fullDate = `${currentDay}/${currentMonth}/${currentYear}`;

const auth = getAuth(appFireBase);

function Home({ userEmail }) {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "This is my first note",
      text: "Content of the first note",
      date: fullDate,
    },
    {
      id: nanoid(),
      title: "This is my second note",
      text: "Content of the second note",
      date: fullDate,
    },
    {
      id: nanoid(),
      title: "This is my third note",
      text: "Content of the third note",
      date: fullDate,
    },
    {
      id: nanoid(),
      title: "This is my new note",
      text: "Content of the new note",
      date: fullDate,
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = ( title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title,
      text: '',
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, updatedNote) => {
    const newNotes = notes.map((note) =>
      note.id === id ? updatedNote : note
    );
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode ? style.darkMode : ''}`}>
      <Header handleToggleDarkMode={setDarkMode} />
      <h2 className="text-center">
        Welcome {userEmail}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Log Out
        </button>
      </h2>
      <div className={style.mainContainer}>
        <SideBar
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleSelectNote={(note) => setSelectedNote(note)}
        />
        <Main
          selectedNote={selectedNote}
          handleUpdateNote={updateNote}
        />
      </div>
    </div>
  );
}

export default Home;
