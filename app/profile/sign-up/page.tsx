import MediumButton from "@/app/components/buttons/mediumButton";
import TextInput from "@/app/components/inputs/textInput";
import { faEnvelope, faKey, faU, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
      <section
        className="flex flex-col place-self-center p-5 items-center gap-3
      border-2 border-primary2 text-primary2 rounded-xl w-96 "
      >
        {/* Heading */}
        <article className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-center">
            Bienvenid@ al club
        </h1>
        <span className="text-xl font-semibold text-center text-primary1">
            Registrate ahora en nuetra <br />
            web para aprovecharte de <br />
            todas las ventajas
        </span>
        </article>
        {/* Log In Form */}
        <form className="flex flex-col items-center gap-5">
          {/* Name Input */}
          <TextInput
            label={"Nombre"}
            placeholder="Tu nombre"
            icon={faUser}
            id={"name"}
            type={"text"}
          ></TextInput>
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
          {/* Log In Link */} {/* TODO */}
          <a
            href="/layout/error.html"
            className="text-xl font-bold text-center text-black-0"
          >
            ¿Tienes ya una cuenta? <br />  
            <span className="text-red-500">Inicia sesión ahora mismo.</span>
          </a>
          {/* Confirm Button */}
          <MediumButton text={"Registrarse"} />
        </form>
      </section>
    </main>
  );
}
