"use client";

import {
  audiometryFileName,
  contactBodyName,
  contactEmailName,
} from "@/app/config/JSONnames";
import SubmitButton from "@/app/ui/components/buttons/submitButton/submitButton";
import FileInput from "@/app/ui/components/inputs/fileInput/fileInput";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput/textInput";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendAudiometryFileEmail } from "@/lib/mail";
import { validateSendAudiometryFileForm } from "@/lib/validations/validations";
import {
  faEnvelope,
  faPenNib,
  faComment,
  faUpload,
  faFile,
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
export function SendAudiometryFileForm(): JSX.Element {
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
    const isValid = validateSendAudiometryFileForm(formData);

    if (isValid) {
      sendAudiometryFileEmail(formData)
        .then((_) => toast.success("Se ha enviado el correo."))
        .catch((_) => toast.error("No se ha podido enviar el correo."));
    } else handleShowModal();
  };

  return (
    <>
      <SectionHeader text={"Envíanos tu Audiometría"} />
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Information */}
        <article
          className={`flex flex-col lg:w-1/2 gap-4 lg:gap-8 m-2 md:mt-0 lg:mx-5 px-2 lg:px-5 justify-around
                              ${componentText} text-lg sm:text-xl lg:text-2xl font-medium  align-middle text-justify `}
        >
          <div>
            En esta página puedes{" "}
            <span className="font-bold">enviarnos tu audiometría</span> para que
            podamos realizar recomendaciones de productos afínes a tus
            necesidades.
          </div>
          <ul className="px-5 lg:px-10 font-semibold">
            <li>* ¿Tienes dudas al elegir los audífonos disponibles?</li>
            <li>* ¿Necesitas que tengamos algún detalle en cuenta?</li>
            <li>* ¿Buscar algo en específico?</li>
          </ul>
          <div>
            Sea lo que necesites, no dudes en escribirnos. Y en{" "}
            <span className="font-bold">menos de 24 horas</span> serás
            contestado con una serie de sugerencias.
          </div>
        </article>
        {/* Contact Form */}
        <form
          action={handleContactForm}
          className={`flex flex-col gap-5 p-5 sm:p-10 items-center justify-center lg:w-1/2
                     ${componentBackground}
                     ${componentBorder} rounded-xl`}
        >
          <SectionHeader text={"Envíanos tu audiometría"} />
          <TextInput
            name={contactEmailName}
            type={"text"}
            placeholder={"ejemplo@email.com"}
            label={"Correo Electrónico"}
            icon={faEnvelope}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Información extra a tener en cuenta"}
            label={"Cuerpo del mensaje"}
            icon={faComment}
          />
          {/* Audiometry */}
          <FileInput
            name={audiometryFileName}
            label={"Archivo de Audiometría"}
            icon={faFile}
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
