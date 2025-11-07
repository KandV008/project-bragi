import AboutBargain from "@/app/ui/containers/services/bargains/aboutBargain";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Ver Oferta",
};

/**
 * Page component for viewing a bargain.
 * This component renders the `AboutBargain` container.
 *
 * @returns {JSX.Element} The AboutBargain page component.
 */
export default function Page(): JSX.Element {
  return <AboutBargain />;
}
