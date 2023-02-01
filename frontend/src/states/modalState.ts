import { atom } from "recoil";

export const modalState = atom<number>({
  key:"modalState",
  default: -1,
}) 