import InDevelopmentMessage from "@/app/ui/components/messages/inDevelopmentMessage/inDevelopmentMessage";
import { Metadata } from "next";

export const dynamic = "force-static";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "En desarrollo",
};

/**
 * Page component for displaying an "In Development" message.
 * This component renders the `InDevelopmentMessage` component.
 *
 * @returns {JSX.Element} The InDevelopmentMessage page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <InDevelopmentMessage />
    </>
  );
}
