const key = "myEmail";
export const setLocalStorage = (email: string) => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  localStorage.setItem(key, email);
};

export const getLocalStorage = () => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  return localStorage.getItem(key);
};

export const removeLocalStorage = () => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  localStorage.removeItem(key);
};
