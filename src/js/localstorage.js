const fieldName = 'darkTheme';

export const saveThem = (status) => {
  localStorage.setItem(fieldName, status);
};

export const getTheme = () => {
  return localStorage.getItem(fieldName);
};