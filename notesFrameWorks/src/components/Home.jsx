import React, { useState } from "react";
import { nanoid } from "nanoid";
import appFireBase from "../credencials";
import NodeList from "./notelist/NoteList";
import style from "./Home.module.css";
import { getAuth, signOut } from "firebase/auth";
import Search from "./search/Search";
import Header from "./header/Header";

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
      text: "This is my first note",
      date: fullDate,
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: fullDate,
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: fullDate,
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: fullDate,
    },
  ]);

const [searchText,setSearchText]=useState('')

const [darkMode,setDarkMode]=useState(false);



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote=(id)=>{
    const newNotes= notes.filter((note)=>note.id!==id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'darkMode'}`}>
      <h2 className="text-center">
        Welcome {userEmail}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Log Out
        </button>
      </h2>
      <div className={style.container}>
        <Header handleToggleDarkMode={setDarkMode}/> 
        <Search handleSearchNote={setSearchText}/>
        <NodeList notes={notes.filter((note)=>
        note.text.toLowerCase().includes(searchText)
        )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}

export default Home;
