// Альтернативный вариант

import { saveTheme, getTheme } from './localstorage.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');

const themeToggle = document.getElementById('theme-switch-toggle');

themeToggle.addEventListener('change', (event) => {
  const isDarkTheme = event.target.checked;
  saveTheme(JSON.stringify(isDarkTheme));
  toggleTheme(isDarkTheme);
});

const setLightTheme = () => {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}

const setDarkTheme = () => {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
}

const toggleTheme = (isDarkTheme) => {
  themeToggle.checked = isDarkTheme;
  isDarkTheme ? setDarkTheme() : setLightTheme();
}

const initialTheme = getTheme();

toggleTheme(JSON.parce(initialTheme));

