import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { componentBorder, componentBackground, componentText } from "@/app/ui/tailwindClasses";
import {
  faLeftLong,
  faEnvelope,
  faCalendar,
  faUsers,
  faBagShopping,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export const dynamic = "force-static";

/**
 * Page component that displays a list of available services.
 * This includes navigation buttons for various services such as appointments, offers, novelties, about us, and contact.
 * A button for logging out is also included.
 *
 * @returns {JSX.Element} The component rendering the list of available services.
 */
export default function Page(): JSX.Element {
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
        {/* Buttons for navigating to different service sections */}
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
          icon={faAward}
          text={"Novedades"}
          subtext={"Ver todas las novedades"}
          type={"default"}
          navigationURL="/services/novelties"
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
