export const getStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : [];
};

export const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
