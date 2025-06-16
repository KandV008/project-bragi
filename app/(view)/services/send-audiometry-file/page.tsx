import { SendAudiometryFileForm } from "@/app/ui/containers/services/send-audiometry-file/sendAudiometryFileForm";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Enviar Audiometría",
};

/**
 * Page component for the send audiometry file form.
 * This component renders a form page with information about how users can send their audiometry file and a form for submitting that file.
 *
 * @returns {JSX.Element} The Contact Us page component with the contact form and details.
 */
export default function Page(): JSX.Element {
  return (
    <main>
      <SendAudiometryFileForm />
    </main>
  );
}
