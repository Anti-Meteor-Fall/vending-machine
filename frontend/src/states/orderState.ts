import { atom } from "recoil";

export const orderState = atom<Number>({
  key:"orderState",
  default: -1,
}) 