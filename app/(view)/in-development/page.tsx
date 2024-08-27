import InDevelopmentMessage from "@/app/ui/components/messages/inDevelopmentMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "En desarrollo",
};

export default function Page() {

  return (
    <>
      <InDevelopmentMessage />
    </>
  );
}