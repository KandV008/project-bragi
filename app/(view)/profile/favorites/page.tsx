import FavoritesContainer from "@/app/ui/containers/profile/favorites/favoritesContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default function Page() {
  return (
    <>
      <FavoritesContainer />
    </>
  );
}
