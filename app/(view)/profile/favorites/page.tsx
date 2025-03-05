import FavoritesContainer from "@/app/ui/containers/profile/favorites/favoritesContainer";
import { Metadata } from "next";

/**
 * Metadata for the Favorites page.
 * Sets the page title to "Favoritos".
 */
export const metadata: Metadata = {
  title: "Favoritos",
};

/**
 * Page component for displaying the user's favorite products.
 * It renders the `FavoritesContainer` component, which manages
 * the display and functionality of the user's saved favorite items.
 * 
 * @returns {JSX.Element} The Favorites page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <FavoritesContainer />
    </>
  );
}
