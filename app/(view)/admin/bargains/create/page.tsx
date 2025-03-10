import BargainForm from "@/app/ui/containers/admin/bargains/bargainForm";
import { Metadata } from "next";

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
      <BargainForm />
    </section>
  );
}
