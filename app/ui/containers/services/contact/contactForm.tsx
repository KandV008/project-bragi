"use client";

import {
  contactBodyName,
  contactEmailName,
  contactSubjectName,
  userNameName,
} from "@/app/config/JSONnames";
import SubmitButton from "@/app/ui/components/buttons/submitButton/submitButton";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput/textInput";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendContactEmail } from "@/lib/mail";
import { validateContactForm } from "@/lib/validations/validations";
import {
  faEnvelope,
  faPenNib,
  faComment,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

/**
 * ContactForm component provides a form for users to send messages.
 * It includes validation, form submission, and a modal for error handling.
 *
 * @component
 * @returns {JSX.Element} The ContactForm component.
 */
export function ContactForm(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the validation popup modal.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles form submission, validates input, and performs the respective action.
   * If the form is valid, it sends an email; otherwise, it shows a validation popup.
   *
   * @function
   * @param {FormData} formData - The submitted form data.
   */
  const handleContactForm = (formData: FormData) => {
    const isValid = validateContactForm(formData);

    if (isValid) {
      sendContactEmail(formData)
        .then((_) => toast.success("Se ha enviado el correo."))
        .catch((_) => toast.error("No se ha podido enviar el correo."));
    } else handleShowModal();
  };

  return (
    <>
      <SectionHeader text={"Contacta con nosotros"} />
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Information */}
        <article
          className={`flex flex-col lg:w-1/2 gap-4 lg:gap-8 m-2 md:mt-0 lg:mx-5 px-2 lg:px-5 justify-around
                              ${componentText} text-lg sm:text-xl lg:text-2xl font-medium  align-middle text-justify `}
        >
          <div>
            En esta página puedes{" "}
            <span className="font-bold">contactar con nosotros</span> para
            resolver cualquier necesidad que tengas relacionada con nosotros.
          </div>
          <ul className="px-5 lg:px-10 font-semibold">
            <li>* ¿Quieres contactar con nosotros por la razón que sea?</li>
            <li>
              * ¿Necesitas resolver alguna duda relacionada con el
              funcionamiento de la web?
            </li>
            <li>* ¿Tienes alguna sugerencia para mejorar la aplicación?</li>
          </ul>
          <div>
            Sea lo que sea, no dudes en escribirnos. Y en{" "}
            <span className="font-bold">menos de 24 horas</span> serás
            contestado con lo que requieras.
          </div>
        </article>
        {/* Contact Form */}
        <form
          action={handleContactForm}
          className={`flex flex-col gap-5 p-5 sm:p-10 items-center justify-center lg:w-1/2
                     ${componentBackground}
                     ${componentBorder} rounded-xl`}
        >
          <SectionHeader text={"¿En qué te podemos ayudar?"} />
          <TextInput
            name={userNameName}
            type={"text"}
            placeholder={"Me llamo..."}
            label={"Nombre"}
            icon={faUser}
          />
          <TextInput
            name={contactEmailName}
            type={"text"}
            placeholder={"ejemplo@email.com"}
            label={"Correo Electrónico"}
            icon={faEnvelope}
          />
          <TextInput
            name={contactSubjectName}
            type={"text"}
            placeholder={"Razón de contacto"}
            label={"Asunto del mensaje"}
            icon={faPenNib}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Texto con el mensaje"}
            label={"Cuerpo del mensaje"}
            icon={faComment}
          />
          <div className="place-self-center">
            <SubmitButton text={"Enviar"} icon={faUpload} isDisable={false} />
          </div>
        </form>
      </section>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}
