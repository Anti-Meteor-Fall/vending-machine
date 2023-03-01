import { atom } from "recoil";

export const cashInputValue = atom<number>({
  key:"cashInputValue",
  default: 0,
}) 