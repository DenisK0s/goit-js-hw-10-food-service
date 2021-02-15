import { saveThem, getTheme } from './localstorage.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');

const themeToggle = document.getElementById('theme-switch-toggle');

themeToggle.addEventListener('change', event => {
  const switcherPosition = event.target.checked;

  saveThem(JSON.stringify(switcherPosition));
  
  if (switcherPosition) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

const setLightTheme = () => {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}

const setDarkTheme = () => {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
}

const currentState = getTheme();

const setCurrentTheme = state => {
  themeToggle.checked = state;
  state ? setDarkTheme() : setLightTheme();
};

setCurrentTheme(JSON.parse(currentState));