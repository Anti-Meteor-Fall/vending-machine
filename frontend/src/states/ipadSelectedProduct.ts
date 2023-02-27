import { atom } from "recoil";

export const ipadSelectedProduct = atom<number>({
  key:"ipadSelectedProduct",
  default: -1,
}) 