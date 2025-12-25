import { AdminBargainSkeleton } from "@/app/ui/containers/services/bargains/aboutBargain";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutBargain = dynamic(
  () => import("@/app/ui/containers/services/bargains/aboutBargain"),
  { ssr: false, loading: () => <AdminBargainSkeleton /> }
);

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Ver Oferta",
};

/**
 * Page component for viewing a bargain.
 * This component renders the `AdminBargain` container.
 *
 * @returns {JSX.Element} The AdminBargain page component.
 */
export default function Page(): JSX.Element {
  return <AboutBargain />;
}
