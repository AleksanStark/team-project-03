import React, { useState, useEffect } from 'react';
import { SwitcherWrapp, SwitcherBox } from './ThemeSwitcher.styled';
import sun from '../images/sun.png';
import moon from '../images/moon.png';
import clouds from '../images/cloudy.png';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      document.body.dataset.theme = savedTheme;
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      const initialTheme = prefersDarkMode ? 'dark' : 'light';
      document.body.dataset.theme = initialTheme;
      setIsDarkTheme(initialTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme ? 'dark' : 'light';
    setIsDarkTheme(!isDarkTheme);
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <SwitcherBox>
      <SwitcherWrapp>
        <input
          type="checkbox"
          className="switcher"
          onChange={toggleTheme}
          checked={isDarkTheme}
        />
        <span className="switcher-slider"></span>
      </SwitcherWrapp>
    </SwitcherBox>
  );
};

export default ThemeSwitcher;
