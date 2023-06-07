import { useState } from "react";
import { Link } from "react-router-dom";
import { LikeIcon, FillLikeIcon, CommentIcon } from "../Components/icons/Icons";

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
      conmments: 3,
      likes: 3,
      isLike: false,
    };
    dummyData.push(cardData);
  }
  return dummyData;
};

export default function PopupList() {
  const [popupList, setPopupList] = useState(generateDummyData());

  const handleLike = (id: number) => {
    setPopupList((prevList) => {
      const updatedList = prevList.map((popup) => {
        if (popup.id === id) {
          return {
            ...popup,
            isLike: !popup.isLike,
            likes: popup.likes + (popup.isLike ? -1 : 1),
          };
        }
        return popup;
      });
      return updatedList;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {popupList.map((popup) => (
          <div key={popup.id}>
            <Link to={`/popupList/${popup.id}`}>
              <figure className="bg-gray-500 h-80">
                <img src="" alt="" />
                <span>팝업스토어 사진</span>
              </figure>
              <div className="p-3">
                <div className="mb-3">
                  <h3 className="font-bold">{popup.name}</h3>
                  <p>{popup.address}</p>
                  <p>{popup.period}</p>
                </div>
              </div>
            </Link>
            <div>
              <div className="flex items-center justify-end">
                <div className="flex items-center">
                  <CommentIcon width={30} height={30} fill={"orange"} />
                  {popup.conmments}
                </div>
                {popup.isLike ? (
                  <div
                    className="flex items-center"
                    onClick={() => handleLike(popup.id)}
                  >
                    <FillLikeIcon width={30} height={30} fill="#F24E1E" />
                    {popup.likes}
                  </div>
                ) : (
                  <div
                    className="flex items-center"
                    onClick={() => handleLike(popup.id)}
                  >
                    <LikeIcon width={30} height={30} fill="#F24E1E" />
                    {popup.likes}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
