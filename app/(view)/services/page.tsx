"use client";

import {
  faLeftLong,
  faEnvelope,
  faCalendar,
  faUsers,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon";
import {
  componentBorder,
  componentBackground,
  componentText,
} from "@/app/ui/tailwindClasses";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";

export default function AdminDashboard() {
  return (
    <>
      <SectionHeader text={"Servicios Disponibles"} />
      <section
        className={`flex flex-col place-self-center p-5 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
        ${componentBorder} ${componentBackground} ${componentText}`}
      >
        <h1
          className={`${componentText}
            text-lg md:text-xl lg:text-2xl font-bold w-fit`}
        >
          ¿Qué necesitas?
        </h1>
        <div className={`w-full border-t mb-1 ${componentBorder}`}></div>
        <MediumButtonWithIcon
          icon={faCalendar}
          text={"Pedir Cita"}
          subtext={"Pide tu cita ahora mismo"}
          type={"default"}
          navigationURL="/services/appointment"
        />
        <MediumButtonWithIcon
          icon={faBagShopping}
          text={"Ofertas"}
          subtext={"Ver todas las ofertas"}
          type={"default"}
          navigationURL="/services/bargains"
        />
        <MediumButtonWithIcon
          icon={faUsers}
          text={"Sobre Nosotros"}
          subtext={"Conoce al equipo detrás"}
          type={"default"}
          navigationURL="/services/about-us"
        />
        <MediumButtonWithIcon
          icon={faEnvelope}
          text={"Contacto"}
          subtext={"Escríbenos tus dudas"}
          type={"default"}
          navigationURL="/services/contact"
        />
        <MediumButtonWithIcon
          icon={faLeftLong}
          text={"Salir"}
          subtext={"Salir de los servicios"}
          type={"warning"}
          navigationURL="/"
        />
      </section>
    </>
  );
}
