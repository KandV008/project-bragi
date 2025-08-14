import ResultTPVMessage from "@/app/ui/components/messages/resultTPVMessage/resultTPVMessage";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Resultado de la compra",
};

/**
 * Page component for displaying an the result of the TPV operation.
 * This component renders the `ResultTPVMessage` component.
 *
 * @returns {JSX.Element} The ResultTPVMessage page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <ResultTPVMessage />
    </>
  );
}
