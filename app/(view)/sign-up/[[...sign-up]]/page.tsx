import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse",
};

export default function Page() {
  return (
    <section className="flex flex-col place-self-center p-5 items-center gap-3 z-0">
      <SignUp />
    </section>
  );
}
