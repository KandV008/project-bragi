import { BargainFormSkeleton } from "@/app/ui/containers/admin/bargains/bargainForm";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const BargainForm = dynamic(
  () => import("@/app/ui/containers/admin/bargains/bargainForm"),
  { ssr: false, loading: () => <BargainFormSkeleton /> }
);

const AdminPanel = dynamic(
  () => import("@/app/ui/containers/admin/adminPanel"),
  { ssr: false }
);

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Crear Oferta",
};

/**
 * Page component for creating a new bargain.
 * This component renders the `BargainForm` inside a `<section>` element.
 *
 * @returns {JSX.Element} The BargainForm page component.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <AdminPanel
        entity={"bargain"}
        context={"CREATE"}
        extras={{
          entityId: undefined,
          url: undefined,
        }}
      />
      <BargainForm />
    </section>
  );
}
