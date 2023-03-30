import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

const data = {
  id: 0,
  overview: "",
  title: "",
  poster_path: "",
};

export const detailState = atom({
  key: "detailState",
  default: data,
});

export const userEmailValue = atom({
  key: "emailValue",
  default: "",
});
