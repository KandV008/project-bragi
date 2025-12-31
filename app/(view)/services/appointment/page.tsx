import AppointmentForm from "@/app/ui/containers/services/appointment/appointmentForm";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Pedir cita",
};

/**
 * Page component for making an appointment.
 * This component renders the `AppointmentForm` container to allow users to request an appointment.
 *
 * @returns {JSX.Element} The Appointment Request page component.
 */
export default function Page(): JSX.Element {
  return <AppointmentForm />;
}
