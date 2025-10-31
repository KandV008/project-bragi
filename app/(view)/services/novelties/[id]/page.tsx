import AboutNovelty from "@/app/ui/containers/services/novelties/aboutNovelty";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Ver Novedad",
};

/**
 * Page component for viewing a novelty.
 * This component renders the `AboutNovelty` container.
 *
 * @returns {JSX.Element} The AboutNovelty page component.
 */
export default function Page(): JSX.Element {
  return <AboutNovelty />;
}
