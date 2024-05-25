import React from "react";
import style from "./Note.module.css";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className={style.note}>
      <span>{text}</span>
      <div className={style.noteFooter}>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className={style.deleteIcon}
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
