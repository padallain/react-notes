import React from 'react'
import style from './Header.module.css'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className={style.header}>
        <h1>NotePad</h1>
        <button className={style.save} onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}> Toogle Mode</button>
      
    </div>
  )
}

export default Header
