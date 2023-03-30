const key = "@token";
export const setLocalStorage = (token: string) => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  localStorage.setItem(key, token);
};

export const getLocalStorage = () => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  localStorage.getItem(key);
};

export const removeLocalStorage = () => {
  if (typeof window === "undefined") {
    console.log("can not access without window");
    return;
  }
  localStorage.removeItem(key);
};
