import { ContactForm } from "@/app/ui/containers/services/contact/contactForm";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Contáctanos",
};

/**
 * Page component for the contact form.
 * This component renders a contact page with information about how users can reach out and a form for submitting inquiries.
 *
 * @returns {JSX.Element} The Contact Us page component with the contact form and details.
 */
export default function Page(): JSX.Element {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
