import AdminUpdateBargain from "@/app/ui/containers/admin/bargains/adminUpdateBargain";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Actualizar Oferta",
};

/**
 * Page component for updating a bargain.
 * This component renders the `AdminUpdateBargain` container.
 *
 * @returns {JSX.Element} The AdminUpdateBargain page component.
 */
export default function Page(): JSX.Element {
  return <AdminUpdateBargain />;
}
