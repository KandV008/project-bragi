import TermsAndConditions from "@/app/ui/containers/policies/termsAndConditions/termsAndConditions";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Términos y Condiciones",
};

export default function Page(): JSX.Element {
  return <TermsAndConditions />;
}
