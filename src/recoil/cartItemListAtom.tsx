import { atom, selector } from "recoil";

export interface CartItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export const cartListAtom = atom<CartItem[]>({
  key: "cartListAtom",
  default: [],
});

export const QuantityItem = selector({
  key: "QuantityItem",
  get: ({ get }) => {
    const currentItem = get(cartListAtom);
    return currentItem.length.toLocaleString();
  },
});
