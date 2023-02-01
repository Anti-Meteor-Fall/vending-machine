import { atom } from "recoil";

export const productSelectState = atom<number>({
  key:"productSelectState",
  default: -1,
}) 