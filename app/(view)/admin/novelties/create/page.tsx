import NoveltyForm from "@/app/ui/containers/admin/novelties/noveltyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crear Novedad",
  };
  
export default function Page(){
    return (
        <section>
            <NoveltyForm />
        </section>
    );
}