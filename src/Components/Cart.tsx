import { useRecoilValue } from "recoil";
import { cartListAtom } from "../recoil/cartItemListAtom";

export default function Cart() {
  const cartList = useRecoilValue(cartListAtom);

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-10">장바구니</h3>
      {cartList.map((item) => (
        <div className="flex items-center" key={item.id}>
          <figure className="w-20 h-20 bg-gray-500 rounded-full">
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 rounded-full flex items-center justify-center"
            />
          </figure>
          <p>{item.title}</p>

          <div className="join join-horizontal">
            <button className="btn join-item hover:bg-slate-600 hover:text-white">
              +
            </button>
            <button className="btn join-item">1</button>
            <button className="btn join-item hover:bg-slate-600 hover:text-white">
              -
            </button>
          </div>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}
