import { atom } from "recoil";

type listType = {
  id: number;
  name: string;
  price: number;
  image: string;
  is_set: boolean;
  quantity: number;
  created_at: string;
  updated_at: string;
};

export const productList = atom<listType[]>({
  key:"productListState",
  default: [],
}) 