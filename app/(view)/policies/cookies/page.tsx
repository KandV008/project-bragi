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
