const key = "myEmail";
const boardKey = "boardDetail";
export const setLocalStorage = (email: string) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, email);
};

export const getLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  return localStorage.getItem(key);
};

export const removeLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
};

export const setBoardLocalStorage = (id: string) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(boardKey, id);
};

export const getBoardLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  return localStorage.getItem(boardKey);
};

export const removeBoardLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(boardKey);
};
