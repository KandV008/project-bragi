import ArticleHeader from "@/app/ui/components/tags/articleHeader/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import Cookies from "@/app/ui/containers/policies/cookies/cookies";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Política de Cookies",
};

export default function Page(): JSX.Element {
  return (
    <Cookies />
  );
}
