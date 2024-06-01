import React, { useState } from 'react';
import style from './Header.module.css';
import Switch from "react-switch";

const Header = ({ handleToggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial state for dark mode

  const handleSwitchChange = () => {
    setIsDarkMode(!isDarkMode); // Update state based on current value
    handleToggleDarkMode(isDarkMode); // Pass the updated state to parent
  };

  return (
    <div className={style.header}>
      <h1>NotePad</h1>
      <Switch
        className={style.save}
        onChange={handleSwitchChange}
        checked={isDarkMode} // Reflect current state in the switch
      />
    </div>
  );
};

export default Header;