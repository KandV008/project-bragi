"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  pressedButton,
  negativeComponentText,
  negativeComponentBackground,
  negativeHoverComponentBackground,
  componentBorder,
  hoverComponentBorder,
} from "../../tailwindClasses";
import { toggleFavorites } from "@/db/favorites/favorites";

/**
 * Props for the FavoriteToggleButton component.
 */
interface FavoriteToggleButtonProps {
  /**
   * The ID of the product being favorited.
   */
  productId: string;

  /**
   * Boolean indicating whether the product is already favorited.
   */
  isActive: boolean;
}

/**
 * A button component for toggling the favorite status of a product.
 * Displays a heart icon, which changes color when clicked to indicate 
 * whether the product is favorited or not.
 * 
 * @param productId - The ID of the product being favorited.
 * @param isActive - Boolean indicating the initial favorited state of the product.
 * @returns A button that toggles the favorite status of a product.
 */
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

/**
 * Skeleton component for the FavoriteToggleButton.
 * It displays a placeholder for the button while the actual component is loading.
 * 
 * @returns A JSX element representing a skeleton loader for the favorite toggle button.
 */
export function FavoriteToggleButtonSkeleton() {
  return (
    <div className="h-8 w-12 md:size-10 xl:size-12 rounded-2xl border-2 bg-gray-200" />
  );
}
