"use client";

import SubmitButton from "@/app/ui/components/buttons/submitButton";
import Calendar from "@/app/ui/components/calendar/calendar";
import TextInput from "@/app/ui/components/inputs/textInput";
import { Article } from "@/app/ui/components/tags/article";
import ArticleHeader from "@/app/ui/components/tags/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import { useUser } from "@clerk/nextjs";
import { faCalendar, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Page() {
  const { user } = useUser();

  return (
    <form className="flex flex-col w-full px-5 gap-5">
      <SectionHeader text={"Pedir cita vía online"} />
      {/* Calendar */}
      <Calendar />
      {/* User Data */}
      <section className="flex flex-col items-center">
        <ArticleHeader text={"Datos que se usarán para pedir la cita"} />
        {user ? (
          <article className={`flex flex-row gap-8 justify-between w-2/3`}>
            <Article label={"Nombre del Cliente"} value={user.fullName!.toString()} />
            <Article label={"Correo del Cliente"} value={user.emailAddresses[0].toString()} />
            <input type="hidden" name="name" value={user.fullName!.toString()} />
            <input type="hidden" name="email" value={user.emailAddresses[0].toString()} />
          </article>
        ) : (
          <article className={`flex flex-col gap-3`}>
            <TextInput name={"name"} type={"text"} placeholder={"Nombre"} label={"Nombre del Cliente"} icon={faUser} />
            <TextInput name={"email"} type={"text"} placeholder={"Correo electrónico"} label={"Correo del Cliente"} icon={faEnvelope} />
            <strong className="font-semibold">
              *
              <Link href={"/log-in"} className="hover:underline font-extrabold">
                Inicia Sesión o Regístrate
              </Link>{" "}
              para usar tus datos a la hora de pedir la cita.
            </strong>
          </article>
        )}
      </section>
      {/* Submit */}
      <section className="self-center">
        <SubmitButton text={"Realizar Reserva"} icon={faCalendar} isDisable={false} />
      </section>
    </form>
  );
}
