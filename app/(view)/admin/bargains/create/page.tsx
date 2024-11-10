import BargainForm from "@/app/ui/containers/admin/bargains/bargainForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crear Oferta",
  };

export default function Page(){
    return (
        <section>
            <BargainForm />
        </section>
    );
}