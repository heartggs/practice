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

export const TotalPrice = selector({
  key: "TotalPrice",
  get: ({ get }) => {
    const currentItem = get(cartListAtom);
    const totalPrice = currentItem.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return totalPrice;
  },
});

export const QuantityItem = selector({
  key: "QuantityItem",
  get: ({ get }) => {
    const currentItem = get(cartListAtom);
    return currentItem.length.toLocaleString();
  },
});
