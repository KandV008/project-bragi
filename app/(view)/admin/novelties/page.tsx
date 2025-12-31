import { AdminNoveltyListSkeleton } from "@/app/ui/containers/admin/novelties/adminNoveltyList";
import { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Administrar Novedades",
};

const AdminNoveltyList = dynamic(
  () => import("@/app/ui/containers/admin/novelties/adminNoveltyList"),
  {
    ssr: false,
    loading: () => <AdminNoveltyListSkeleton />,
  }
);


/**
 * Page component for managing novelties.
 * This component renders the `AdminNoveltyList` container.
 *
 * @returns {JSX.Element} The AdminNoveltyList page component.
 */
export default function Page(): JSX.Element {
  return <AdminNoveltyList />;
}
