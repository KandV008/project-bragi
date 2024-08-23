"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { toggleFavorites } from "@/db/action";

interface FavoriteToggleButtonProps {
  productId: string;
  isActive: boolean;
}

export default function FavoriteToggleButton({
  productId,
  isActive,
}: FavoriteToggleButtonProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { user } = useUser();

  useEffect(() => {
    setIsFavorite(isActive)
  }, [isActive]);

  const toggleFavourite = () => {
    setIsFavorite(prev => !prev);
  };

  const textColor = isFavorite ? "text-rose-600" : "text-emerald-100 dark:text-emerald-800";
  const bgColor = isFavorite ? "bg-rose-200 hover:bg-rose-300" : "bg-emerald-900 dark:bg-emerald-100 hover:bg-emerald-700 hover:dark:bg-emerald-200";
  const borderColor = isFavorite ? "border-rose-600" : "border-emerald-900 dark:border-emerald-100 hover:border-emerald-700 hover:dark:border-emerald-200";

  return (
    <>
      {!user ? (
        <></>
      ) : (
        <form action={toggleFavorites}>
          <input type="hidden" name="id" value={productId} />
          <button
            type="submit"
            onClick={toggleFavourite}
            className={`rounded-2xl border-2  h-8 w-12 md:size-10 xl:size-12 ${bgColor} ${borderColor} ${textColor}`}
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
