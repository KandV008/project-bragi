"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavorites } from "@/app/lib/action";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

interface FavoriteToggleButtonProps {
  productId: string;
}

export default function FavoriteToggleButton({
  productId: id,
}: FavoriteToggleButtonProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (id && user) {
      fetch(`/api/checkFavorite?productId=${id}&userId=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setIsFavourite(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id, user]);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const textColor = isFavourite ? "text-red-500" : "text-primary2";
  const bgColor = isFavourite ? "bg-red-200" : "bg-primary0";
  const borderColor = isFavourite ? "border-red-500" : "border-primary2";

  return (
    <>
      {!user ? (
        <></>
      ) : (
        <form action={toggleFavorites}>
          <input type="hidden" name="id" value={id} />
          <button
            type="submit"
            onClick={toggleFavourite}
            className={`rounded-2xl border-2 hover:bg-gray-400 hover:dark:bg-gray-700 h-8 w-12 md:size-10 xl:size-12 ${bgColor} ${borderColor} ${textColor}`}
          >
            <div className="">
              <FontAwesomeIcon icon={faHeart} className="" />
            </div>
          </button>
        </form>
      )}
    </>
  );
}
