import { atom } from "recoil";

export const orderState = atom<number>({
  key:"orderState",
  default: -1,
}) 