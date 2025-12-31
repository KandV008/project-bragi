"use client";

import {
  contactEmailName,
  contactBodyName,
  userNameName,
  phoneNumberName,
} from "@/app/config/JSONnames";
import SubmitButton from "@/app/ui/components/buttons/submitButton/submitButton";
import TextAreaInput from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput from "@/app/ui/components/inputs/textInput/textInput";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { Icons } from "@/app/ui/fontAwesomeIcons";
import {
  componentText,
  componentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { sendAppointmentEmail } from "@/lib/mail";
import {
  AppointmentFormData,
  appointmentSchema,
} from "@/lib/validations/appointment.scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

/**
 * This component renders a form to book an appointment online.
 *
 * @returns {JSX.Element} The rendered appointment form.
 */
export default function AppointmentForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      await sendAppointmentEmail(data);
      toast.success("Se ha enviado el correo.");
      reset();
    } catch {
      toast.error("No se ha podido enviar el correo.");
    }
  };

  return (
    <>
      <SectionHeader text={"Pedir cita vía online"} />
      <section className="flex flex-col lg:flex-row w-full gap-3">
        {/* Display Shop Location */}
        <article
          className={`flex flex-col lg:w-1/2 gap-4 lg:gap-6 xl:gap-2 m-2 md:mt-0 lg:mx-5  justify-around
                              ${componentText} text-lg sm:text-xl lg:text-2xl font-medium  align-middle  `}
        >
          {/* Text */}
          <div className="text-center sm:text-justify px-2 lg:px-2 flex flex-col gap-2">
            <p>
              En esta página puedes{" "}
              <span className="font-bold">solicitar una cita vía online.</span>
            </p>
            <p>
              Nosotros contactaremos contigo vía telefónica para concretar la
              cita.
            </p>
            <p>
              Recuerda que la cita será{" "}
              <span className="font-bold">presencial</span> en nuestra tienda.
            </p>
          </div>
          {/* Map */}
          <div className="size-full flex flex-col justify-center">
            <iframe
              className={`${componentBorder} m-auto hidden 2xl:block`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.8837945620553!2d-0.13322481110708237!3d38.536446795229544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62051ca5c7aa21%3A0xc15fdd419587e0b0!2sINTERVISI%C3%93N%20EXPERT%20%C3%93ptica%20y%20Audiolog%C3%ADa%20Benidorm!5e0!3m2!1ses!2ses!4v1743010501228!5m2!1ses!2ses"
              width="450"
              height="450"
              loading="lazy"
            ></iframe>{" "}
            <iframe
              className={`${componentBorder} m-auto hidden xl:block 2xl:hidden`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.8837945620553!2d-0.13322481110708237!3d38.536446795229544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62051ca5c7aa21%3A0xc15fdd419587e0b0!2sINTERVISI%C3%93N%20EXPERT%20%C3%93ptica%20y%20Audiolog%C3%ADa%20Benidorm!5e0!3m2!1ses!2ses!4v1743010501228!5m2!1ses!2ses"
              width="350"
              height="350"
              loading="lazy"
            ></iframe>{" "}
            <iframe
              className={`${componentBorder} m-auto hidden lg:block xl:hidden`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.8837945620553!2d-0.13322481110708237!3d38.536446795229544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62051ca5c7aa21%3A0xc15fdd419587e0b0!2sINTERVISI%C3%93N%20EXPERT%20%C3%93ptica%20y%20Audiolog%C3%ADa%20Benidorm!5e0!3m2!1ses!2ses!4v1743010501228!5m2!1ses!2ses"
              width="425"
              height="450"
              loading="lazy"
            ></iframe>{" "}
          </div>
        </article>
        {/* Appointment Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
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
            name={phoneNumberName}
            type={"text"}
            placeholder={"Teléfono de contacto"}
            label={"Teléfono de contacto"}
            icon={Icons.phone}
            register={register(phoneNumberName)}
            error={errors[phoneNumberName]?.message}
          />
          <TextAreaInput
            name={contactBodyName}
            placeholder={"Comentarios a tener en cuenta"}
            label={"Comentarios extras (opcional)"}
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
