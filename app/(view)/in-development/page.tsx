import Message from "@/app/ui/containers/in-development/message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "En desarrollo",
};

export default function Page() {

  return (
    <>
      <Message />
    </>
  );
}