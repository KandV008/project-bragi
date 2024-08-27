import { Metadata } from "next";
import NotFoundMessage from "./ui/components/messages/notFoundMessage";

export const metadata: Metadata = {
  title: "404, Página no disponible",
};

export default function NotFound() {
  return (
    <>
      <NotFoundMessage />
    </>
  );
}
