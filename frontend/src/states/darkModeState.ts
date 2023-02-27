import { atom } from "recoil";

export const darkModeState = atom<number>({
  key:"darkModeState",
  default: 0,
}) 