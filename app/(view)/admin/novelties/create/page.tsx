import { NoveltyFormSkeleton } from "@/app/ui/containers/admin/novelties/noveltyForm";
import { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Crear Novedad",
};

const NoveltyForm = dynamic(
  () => import("@/app/ui/containers/admin/novelties/noveltyForm"),
  { ssr: false, loading: () => <NoveltyFormSkeleton /> }
);

const AdminPanel = dynamic(
  () => import("@/app/ui/containers/admin/adminPanel"),
  { ssr: false }
);

/**
 * Page component for creating a new novelty.
 * This component renders the `NoveltyForm` inside a `<section>` element.
 *
 * @returns {JSX.Element} The NoveltyForm page component.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <AdminPanel
        entity={"novelty"}
        context={"UPDATE"}
        extras={{
          entityId: undefined,
          url: undefined,
        }}
      />
      <NoveltyForm />
    </section>
  );
}
