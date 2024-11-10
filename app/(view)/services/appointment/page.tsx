import AppointmentForm from "@/app/ui/containers/services/appointment/appointmentForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedir cita",
};

export default function Page() {
  return (
    <AppointmentForm />
  );
}
