import AdminBargain from "@/app/ui/containers/admin/bargains/adminBargain/adminBargain";
import { Metadata } from "next";

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
  return <AdminBargain />;
}
