import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Registrarse",
};

/**
 * Page component for user registration.
 * This renders the SignUp component from Clerk to allow users to create an account.
 *
 * @returns {JSX.Element} The component rendering the registration form.
 */
export default function Page(): JSX.Element {
  return (
    <section className="flex flex-col place-self-center p-5 items-center gap-3 z-0">
      <SignUp />
    </section>
  );
}
