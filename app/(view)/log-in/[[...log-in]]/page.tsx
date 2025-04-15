import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Iniciar Sesión",
};

/**
 * Page component for the sign-in form.
 * This component renders the `SignIn` component inside a styled `<section>` element.
 *
 * @returns {JSX.Element} The SignIn page component.
 */
export default function Page(): JSX.Element {
  return (
    <section className="flex flex-col place-self-center p-5 items-center gap-3 z-0">
      <SignIn />
    </section>
  );
}
