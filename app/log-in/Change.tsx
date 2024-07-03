'use client';

import MediumButton from "@/app/components/buttons/mediumButton";
import TextInput from "@/app/components/inputs/textInput";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

export default function Change() {
  const router = useRouter();

  const handleLogInClick = () => {
    // TODO Validation
    // TODO Log In
    router.push("/profile")
  };

  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
      <section
        className="flex flex-col place-self-center p-5 items-center gap-3
      border-2 border-primary2 text-primary2 rounded-xl w-96 "
      >
        {/* Heading */}
        <article className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-center">
            ¿De vuelta por aquí?
        </h1>
        <span className="text-xl font-semibold text-center text-primary1">
            Inicia sesión para aprovechar <br />
            las ventajas de tener una <br />
            cuenta en Bragi
        </span>
        </article>
        {/* Log In Form */}
        <form className="flex flex-col items-center gap-5">
          {/* Email Input */}
          <TextInput
            label={"Correo electrónico"}
            placeholder="Tu correo electrónico"
            icon={faEnvelope}
            id={"email"}
            type={"text"}
          ></TextInput>
          {/* Password Input */}
          <TextInput
            label={"Contraseña"}
            placeholder="Tu contraseña"
            icon={faKey}
            id={"pass"}
            type={"password"}
          ></TextInput>
          {/* Sign Up Link */} {/* TODO */}
          <Link
            href="/sign-up"
            className="text-xl font-bold text-center text-black-0"
          >
            ¿No tienes aún una cuenta? <br />  
            <span className="text-red-500">Haztela ahora mismo.</span>
          </Link>
          {/* Recover Password Link */} {/* TODO */}
          <Link
            href="/" 
            className="text-xl font-bold text-center text-black-0"
          >
            ¿No te acuerdas de tu <span className="text-red-500">contraseña</span>
            ? 
          </Link>
          {/* Confirm Button */}
          <MediumButton 
            text={"Iniciar Sesión"} 
            onClick={handleLogInClick}
          />
        </form>
      </section>
    </main>
  );
}
