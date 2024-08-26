import Message from "./ui/containers/not-found.tsx/message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404, Página no disponible",
};

export default function NotFound() {
  return (
    <>
      <Message />
    </>
  );
}
