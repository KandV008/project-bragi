import { Metadata } from "next";
import NotFoundMessage from "../ui/components/messages/notFoundMessage/notFoundMessage";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "404, Página no disponible",
};

/**
 * The NotFound component renders a message for the 404 page (Page Not Found).
 * It uses a custom message component to display the error.
 * 
 * @returns {JSX.Element} The 404 page with a custom NotFoundMessage component.
 */
export default function NotFound() {
  return (
    <>
      <NotFoundMessage />
    </>
  );
}
