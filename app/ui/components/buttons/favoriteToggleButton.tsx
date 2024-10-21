"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { toggleFavorites } from "@/db/favorites";
import {
  pressedButton,
  negativeComponentText,
  negativeComponentBackground,
  negativeHoverComponentBackground,
  componentBorder,
  hoverComponentBorder,
} from "../../tailwindClasses";

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
    setIsFavorite(isActive);
  }, [isActive]);

  const toggleFavourite = () => {
    setIsFavorite((prev) => !prev);
  };

  const favoriteClasses = isFavorite
    ? `${pressedButton}`
    : `${negativeComponentText} ${negativeComponentBackground} ${negativeHoverComponentBackground} ${componentBorder} ${hoverComponentBorder}`;

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
            className={`rounded-2xl border-2 h-8 w-12 md:size-10 xl:size-12 ${favoriteClasses}`}
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

export function FavoriteToggleButtonSkeleton() {
  return (
    <div className="h-8 w-12 md:size-10 xl:size-12 rounded-2xl border-2 bg-gray-200" />
  );
}
