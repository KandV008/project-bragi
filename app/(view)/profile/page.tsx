import UserDashboard from "@/app/ui/containers/profile/userDashboard";
import type { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Perfil",
};

/**
 * Page component for the user profile dashboard.
 * This component renders the `UserDashboard` container.
 *
 * @returns {JSX.Element} The UserDashboard page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <UserDashboard />
    </>
  );
}
