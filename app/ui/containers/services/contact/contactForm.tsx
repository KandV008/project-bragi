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
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendContactEmail } from "@/lib/mail";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations/contact.scheme";
import { Icons } from "@/app/ui/fontAwesomeIcons";

/**
 * ContactForm component provides a form for users to send messages.
 * It includes validation, form submission, and a modal for error handling.
 *
 * @component
 * @returns {JSX.Element} The ContactForm component.
 */
export function ContactForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactEmail(data);
      toast.success("Se ha enviado el correo.");
      reset();
    } catch {
      toast.error("No se ha podido enviar el correo.");
    }
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
          onSubmit={handleSubmit(onSubmit)}
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
          <TextInput
            name={contactSubjectName}
            type={"text"}
            placeholder={"Razón de contacto"}
            label={"Asunto del mensaje"}
            icon={Icons.pen}
            register={register(contactSubjectName)}
            error={errors[contactSubjectName]?.message}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Texto con el mensaje"}
            label={"Cuerpo del mensaje"}
            icon={Icons.comment}
            register={register(contactBodyName)}
            error={errors[contactBodyName]?.message}
          />
          <div className="place-self-center">
            <SubmitButton text={"Enviar"} icon={Icons.upload} isDisable={false} />
          </div>
        </form>
      </section>
    </>
  );
}
