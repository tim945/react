/*
 * @Author: tim
 * @Date: 2020-07-30 14:28:50
 * @LastEditors: tim
 * @LastEditTime: 2020-07-30 17:12:30
 * @Description: 
 */ 
import React, { useState, useContext, useEffect } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

const Theme = () => {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark':'light')
  }  

  // useEffect(() => {
  //   console.log(theme)
  // })

  return (    
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeButton changeTheme={changeTheme} />
    </ThemeContext.Provider>
  );
}

const ThemeButton = ({changeTheme}) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{ background: theme.background, color: theme.foreground }} onClick={changeTheme}>
        I am styled by theme context!
      </button>
    </div>
  );
}

export default Theme