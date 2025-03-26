"use client";

import {
  contactEmailName,
  contactBodyName,
  userNameName,
  phoneNumberName,
} from "@/app/model/JSONnames";
import SubmitButton from "@/app/ui/components/buttons/submitButton";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendAppointmentEmail } from "@/lib/mail";
import { validateAppointmentForm } from "@/lib/validations";
import {
  faComment,
  faEnvelope,
  faPhone,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

/**
 * This component renders a form to book an appointment online.
 *
 * @returns {JSX.Element} The rendered appointment form.
 */
export default function AppointmentForm(): JSX.Element {
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
    const isValid = validateAppointmentForm(formData);

    if (isValid) {
      sendAppointmentEmail(formData)
        .then((_) => toast.success("Se ha enviado el correo."))
        .catch((_) => toast.error("No se ha podido enviar el correo."));
    } else handleShowModal();
  };

  return (
    <>
      <SectionHeader text={"Pedir cita vía online"} />
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Shop Location */}
        <article
          className={`flex flex-col lg:w-1/2 gap-4 lg:gap-8 m-2 md:mt-0 lg:mx-5 px-2 lg:px-5 justify-around
                              ${componentText} text-lg sm:text-xl lg:text-2xl font-medium  align-middle text-justify `}
        >
          {/* Text */}
          <div>
            En esta página puedes{" "}
            <span className="font-bold">solicitar una cita vía online</span> y
            nosotros contactaremos contigo vía telefónica para concretar la
            cita. Recuerda que la cita será presencial en nuestra tienda.
          </div>
          {/* Map */}
          <div>
            <iframe
              className={`${componentBorder}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.8837945620553!2d-0.13322481110708237!3d38.536446795229544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62051ca5c7aa21%3A0xc15fdd419587e0b0!2sINTERVISI%C3%93N%20EXPERT%20%C3%93ptica%20y%20Audiolog%C3%ADa%20Benidorm!5e0!3m2!1ses!2ses!4v1743010501228!5m2!1ses!2ses"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>{" "}
          </div>
        </article>
        {/* Appointment Form */}
        <form
          action={handleContactForm}
          className={`flex flex-col gap-5 p-5 sm:p-10 items-center justify-center lg:w-1/2
                     ${componentBackground}
                     ${componentBorder} rounded-xl`}
        >
          <SectionHeader text={"Rellene los campos"} />
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
            name={phoneNumberName}
            type={"text"}
            placeholder={"Teléfono de contaco"}
            label={"Teléfono de contacto"}
            icon={faPhone}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Comentarios a tener en cuenta"}
            label={"Comentarios extras (opcional)"}
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
