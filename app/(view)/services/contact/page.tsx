import SubmitButton from "@/app/ui/components/buttons/submitButton";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import { componentBackground, componentBorder, componentText } from "@/app/ui/tailwindClasses";
import {
  faComment,
  faEnvelope,
  faPenNib,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Contáctanos",
};

/**
 * Page component for the contact form.
 * This component renders a contact page with information about how users can reach out and a form for submitting inquiries.
 *
 * @returns {JSX.Element} The Contact Us page component with the contact form and details.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <SectionHeader text={"Contacta con nosotros"} />
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Information */}
        <article className={`flex flex-col lg:w-1/2 gap-4 lg:gap-8 m-2 md:mt-0 lg:mx-5 px-2 lg:px-5 justify-around
                            ${componentText} text-lg sm:text-xl lg:text-2xl font-medium  align-middle text-justify `}>
            <div>En esta página puedes <span className="font-bold">contactar con nosotros</span> para resolver cualquier necesidad que tengas relacionada con nosotros.</div>
            <ul className="px-5 lg:px-10 font-semibold">
                <li>* ¿Quieres contactar con nosotros por la razón que sea?</li>
                <li>* ¿Necesitas resolver alguna duda relacionada con el funcionamiento de la web?</li>
                <li>* ¿Tienes alguna sugerencia para mejorar la aplicación?</li>
            </ul>
            <div>Sea lo que sea, no dudes en escribirnos. Y en <span className="font-bold">menos de 24 horas</span> serás contestado con lo que requieras.</div>
        </article>
        {/* Contact Form */}
        {/* TODO Form Action */}
        <form
          className={`flex flex-col gap-5 p-5 sm:p-10 items-center justify-center lg:w-1/2
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
        >
          <SectionHeader text={"¿En qué te podemos ayudar?"} />
          <TextInput
            name={"email"}
            type={"text"}
            placeholder={"ejemplo@email.com"}
            label={"Correo Electrónico"}
            icon={faEnvelope}
          />
          <TextInput
            name={"subject"}
            type={"text"}
            placeholder={"Razón de contacto"}
            label={"Asunto del mensaje"}
            icon={faPenNib}
          />
          <TextAreaInput
            name={"message"}
            placeholder={"Texto con el mensaje"}
            label={"Cuerpo del mensaje"}
            icon={faComment}
          />
          <div className="place-self-center">
            <SubmitButton text={"Enviar"} icon={faUpload} isDisable={false} />
          </div>
        </form>
      </section>
    </>
  );
}
