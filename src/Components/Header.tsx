import { Link } from "react-router-dom";
import { QuantityItem } from "../recoil/cartItemListAtom";
import { useRecoilValue } from "recoil";

const navMenus = [
  { name: "findPopup", title: "내주변 팝업스토어 찾기" },
  { name: "popupList", title: "팝업스토어 검색하기" },
  { name: "review", title: "리뷰페이지(추후논의)" },
];

export default function Header() {
  const totalQuantity = useRecoilValue(QuantityItem);
  return (
    <>
      <div className="flex items-center justify-between bg-yellow-200">
        <div>
          <h1>
            <Link to="/">logo</Link>
          </h1>
        </div>
        <div>
          <ul className="flex">
            {navMenus.map((menu) => {
              return (
                <li key={menu.name} className="mx-2">
                  <Link to={`/${menu.name}`}>{menu.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex">
          <Link to="/login" className="flex items-center mx-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15C13.625 15 12.4479 14.5104 11.4688 13.5312C10.4896 12.5521 10 11.375 10 10C10 8.625 10.4896 7.44792 11.4688 6.46875C12.4479 5.48958 13.625 5 15 5C16.375 5 17.5521 5.48958 18.5312 6.46875C19.5104 7.44792 20 8.625 20 10C20 11.375 19.5104 12.5521 18.5312 13.5312C17.5521 14.5104 16.375 15 15 15ZM5 25V21.5C5 20.7917 5.1825 20.1404 5.5475 19.5463C5.9125 18.9521 6.39667 18.4992 7 18.1875C8.29167 17.5417 9.60417 17.0571 10.9375 16.7338C12.2708 16.4104 13.625 16.2492 15 16.25C16.375 16.25 17.7292 16.4117 19.0625 16.735C20.3958 17.0583 21.7083 17.5425 23 18.1875C23.6042 18.5 24.0887 18.9533 24.4537 19.5475C24.8187 20.1417 25.0008 20.7925 25 21.5V25H5Z"
                fill="black"
              />
            </svg>
            마이페이지
          </Link>
          <Link to="/signUp" className="flex items-center mx-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 8.75L12 10.5L15.25 13.75H2.5V16.25H15.25L12 19.5L13.75 21.25L20 15L13.75 8.75ZM25 23.75H15V26.25H25C26.375 26.25 27.5 25.125 27.5 23.75V6.25C27.5 4.875 26.375 3.75 25 3.75H15V6.25H25V23.75Z"
                fill="black"
              />
            </svg>
            회원가입하기
          </Link>
          <Link to="/cart" className="flex items-center mx-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 22.5C21.913 22.5 22.5489 22.7634 23.0178 23.2322C23.4866 23.7011 23.75 24.337 23.75 25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5C20.587 27.5 19.9511 27.2366 19.4822 26.7678C19.0134 26.2989 18.75 25.663 18.75 25C18.75 23.6125 19.8625 22.5 21.25 22.5ZM1.25 2.5H5.3375L6.5125 5H25C25.3315 5 25.6495 5.1317 25.8839 5.36612C26.1183 5.60054 26.25 5.91848 26.25 6.25C26.25 6.4625 26.1875 6.675 26.1 6.875L21.625 14.9625C21.2 15.725 20.375 16.25 19.4375 16.25H10.125L9 18.2875L8.9625 18.4375C8.9625 18.5204 8.99542 18.5999 9.05403 18.6585C9.11263 18.7171 9.19212 18.75 9.275 18.75H23.75V21.25H8.75C8.08696 21.25 7.45107 20.9866 6.98223 20.5178C6.51339 20.0489 6.25 19.413 6.25 18.75C6.25 18.3125 6.3625 17.9 6.55 17.55L8.25 14.4875L3.75 5H1.25V2.5ZM8.75 22.5C9.41304 22.5 10.0489 22.7634 10.5178 23.2322C10.9866 23.7011 11.25 24.337 11.25 25C11.25 25.663 10.9866 26.2989 10.5178 26.7678C10.0489 27.2366 9.41304 27.5 8.75 27.5C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25C6.25 23.6125 7.3625 22.5 8.75 22.5ZM20 13.75L23.475 7.5H7.675L10.625 13.75H20Z"
                fill="black"
              />
            </svg>
            장바구니
          </Link>
        </div>
      </div>
      <div className="navbar bg-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Store-it</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalQuantity}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${totalQuantity} Items`}</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/cart">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
