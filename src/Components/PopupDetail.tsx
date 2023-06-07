import { useParams } from "react-router-dom";
import { Product, productList } from "../productList.ts";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CartItem, cartListAtom } from "../recoil/cartItemListAtom.tsx";
import { CartIcon } from "./icons/Icons.tsx";

const generateDummyData = () => {
  const dummyData = [];
  for (let i = 1; i <= 9; i++) {
    const cardData = {
      id: i,
      image: "",
      name: `PopupStore ${i}`,
      address: `서울 영등포구 여의대로 108 - ${i}`,
      period: `20203.06.01 ~ 2023.06.30${i}`,
      operatingTime: "10:00 ~ 20:00",
      comments: 3,
      likes: 3,
      isLike: false,
    };
    dummyData.push(cardData);
  }
  return dummyData;
};

export default function PopupDetail() {
  const { id } = useParams<{ id: string }>();
  const popupList = generateDummyData();
  const pickPopup = popupList.find((popup) => popup.id === Number(id));
  const [products, setProducts] = useState<Product[]>([]);
  const [, setCartItem] = useRecoilState<CartItem[]>(cartListAtom);

  useEffect(() => {
    productList()
      .then((data) => setProducts(data))
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  const addToCart = (productId: number) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      const newCartItem: CartItem = {
        ...selectedProduct,
        quantity: 1,
      };
      setCartItem((currentCartItems) => [...currentCartItems, newCartItem]);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-10 justify-center text-center lg:flex-row md:flex-row md:text-left sm:flex-col sm: items-center sm:text-center">
        <figure className="bg-gray-500 mb-2 w-96 h-60 rounded-2xl sm:mb-2">
          <img src="" alt="" />
          <span className="text-neutral-50 flex justify-center">
            이미지없음
          </span>
        </figure>
        <div className="ml-5">
          <h3 className="font-bold mb-2">{pickPopup?.name}</h3>
          <p>운영시간 : {pickPopup?.operatingTime}</p>
          <p>진행기간 : {pickPopup?.period}</p>
          <p>{pickPopup?.address}</p>
        </div>
      </div>
      <h4 className="text-center font-extrabold text-2xl mb-10">판매상품</h4>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product: Product) => (
          <div key={product.id} className="border border-gray-400 rounded-xl">
            <div className="m-4 divide-y divide-slate-300">
              <img src={product.image} alt="" className="h-40 mx-auto mb-4" />
              <div className="flex justify-between items-center">
                <div className="w-3/4 mt-2">
                  <p className="line-clamp-1">{product.title}</p>
                  <p>{product.price}원</p>
                </div>
                <button
                  className="btn btn-ghost btn-circle"
                  onClick={() => addToCart(product.id)}
                >
                  <CartIcon width={30} height={30} fill="black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
