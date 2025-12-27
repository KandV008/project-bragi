"use client";

import {
  audiometryFileName,
  contactBodyName,
  contactEmailName,
  userNameName,
} from "@/app/config/JSONnames";
import SubmitButton from "@/app/ui/components/buttons/submitButton/submitButton";
import FileInput from "@/app/ui/components/inputs/fileInput/fileInput";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput/textInput";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { Icons } from "@/app/ui/fontAwesomeIcons";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendAudiometryFileEmail } from "@/lib/mail";
import {
  SendAudiometryFileFormData,
  sendAudiometryFileSchema,
} from "@/lib/validations/audiometryFile.scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

/**
 * ContactForm component provides a form for users to send messages.
 * It includes validation, form submission, and a modal for error handling.
 *
 * @component
 * @returns {JSX.Element} The ContactForm component.
 */
export function SendAudiometryFileForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendAudiometryFileFormData>({
    resolver: zodResolver(sendAudiometryFileSchema),
  });

  const onSubmit = async (data: SendAudiometryFileFormData) => {
    try {
      const formData = new FormData();

      formData.append(userNameName, data[userNameName]);
      formData.append(contactEmailName, data[contactEmailName]);
      formData.append(contactBodyName, data[contactBodyName]);
      formData.append(
        audiometryFileName,
        data[audiometryFileName][0]
      );

      await sendAudiometryFileEmail(formData);
      toast.success("Se ha enviado el correo.");
      reset();
    } catch (e) {
      toast.error("No se ha podido enviar el correo.");
    }
  };

  return (
    <>
      <SectionHeader text={"Envíanos tu Audiometría"} />
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Information */}
        <article
          className={`flex flex-col justify-center
            lg:w-1/2 gap-4 lg:gap-8 m-2 md:mt-0 lg:mx-5 px-2 lg:px-5
                              ${componentText} 
                              text-lg sm:text-xl lg:text-2xl font-medium  align-middle text-center sm:text-justify `}
        >
          <p>
            En esta página puedes{" "}
            <span className="font-bold">enviarnos tu audiometría</span>.
          </p>
          <ul className="px-2 lg:px-10 sm:grid gap-2 font-semibold text-start hidden">
            <li>* ¿Tienes dudas al elegir los audífonos disponibles?</li>
            <li>* ¿Necesitas que tengamos algún detalle en cuenta?</li>
            <li>* ¿Buscar algo en específico?</li>
          </ul>
          <p>
            Sea lo que necesites, no dudes en escribirnos. Y en{" "}
            <span className="font-bold">menos de 24 horas</span> serás
            contestado con una serie de sugerencias.
          </p>
        </article>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col gap-5 p-5 sm:p-10 items-center justify-center lg:w-1/2
                     ${componentBackground}
                     ${componentBorder} rounded-xl`}
        >
          <SectionHeader text={"Envíanos tu audiometría"} />
          <TextInput
            name={userNameName}
            type={"text"}
            placeholder={"Me llamo..."}
            label={"Nombre"}
            icon={Icons.user}
            register={register(userNameName)}
            error={errors[userNameName]?.message}
          />
          <TextInput
            name={contactEmailName}
            type={"text"}
            placeholder={"ejemplo@email.com"}
            label={"Correo Electrónico"}
            icon={Icons.email}
            register={register(contactEmailName)}
            error={errors[contactEmailName]?.message}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Información extra a tener en cuenta"}
            label={"Cuerpo del mensaje"}
            icon={Icons.comment}
            register={register(contactBodyName)}
            error={errors[contactBodyName]?.message}
          />
          {/* Audiometry */}
          <FileInput
            name={audiometryFileName}
            label={"Archivo de Audiometría"}
            icon={Icons.file}
            register={register(audiometryFileName)}
            error={errors[audiometryFileName]?.message?.toString()}
          />
          <div className="place-self-center">
            <SubmitButton
              text={"Enviar"}
              icon={Icons.upload}
              isDisable={false}
            />
          </div>
        </form>
      </section>
      <article className="flex flex-center shrink-0 justify-center h-full"></article>
    </>
  );
}
