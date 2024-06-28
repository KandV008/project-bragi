import MediumButton from "@/app/components/buttons/mediumButton";
import TextInput from "@/app/components/inputs/textInput";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
      <section
        className="flex flex-col place-self-center p-5 items-center gap-3
      border-2 border-primary2 text-primary2 rounded-xl w-fit "
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
            icon={faEnvelope}
            id={"email"}
            type={"text"}
          ></TextInput>
          {/* Password Input */}
          <TextInput
            label={"Contraseña"}
            icon={faKey}
            id={"pass"}
            type={"password"}
          ></TextInput>
          {/* Sign Up Link */} {/* TODO */}
          <a
            href="/layout/error.html"
            className="text-xl font-bold text-center text-black-0"
          >
            ¿No tienes aún una cuenta? <br />  
            <span className="text-red-500">Haztela ahora mismo.</span>
          </a>
          {/* Recover Password Link */} {/* TODO */}
          <a
            href="/layout/error.html" 
            className="text-xl font-bold text-center text-black-0"
          >
            ¿No te acuerdas de tu <span className="text-red-500">contraseña</span>
            ? 
          </a>
          {/* Confirm Button */}
          <MediumButton text={"Iniciar Sesión"} />
        </form>
      </section>
    </main>
  );
}
