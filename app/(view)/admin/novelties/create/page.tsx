import NoveltyForm from "@/app/ui/containers/admin/novelties/noveltyForm";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Crear Novedad",
};

/**
 * Page component for creating a new novelty.
 * This component renders the `NoveltyForm` inside a `<section>` element.
 *
 * @returns {JSX.Element} The NoveltyForm page component.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <NoveltyForm />
    </section>
  );
}
