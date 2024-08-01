import Image from "next/image";

export default function FooterBody() {
  return (
    <section className="md:grid text-emerald-300 dark:text-emerald-200 text-sm md:text-xl
    flex flex-row flex-wrap md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-12">
      <article className="flex flex-col">
        <h1 className=" font-bold">Información</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">
          <a className="hover:underline">Conócenos</a>
          <a className="hover:underline">Aviso Legal</a>
          <a className="hover:underline">Política de Cookies</a>
          <a className="hover:underline">Política de privacidad</a>
          <a className="hover:underline">Términos y condiciones</a>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Atención al cliente</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">          <a className="hover:underline">Servicios</a>
          <a className="hover:underline">Pide Cita</a>
          <a className="hover:underline">Derecho de desistimiento</a>
          <a className="hover:underline">Garantías</a>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Mi cuenta</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">          <a className="hover:underline">Mi Cuenta</a>
          <a className="hover:underline">Mi Cesta</a>
          <a className="hover:underline">Mis Favoritos</a>
        </div>
      </article>
      <article className="flex flex-col space-y-8 justify-center">
        <Image
          src="/next.svg"
          width={150}
          height={150}
          alt="Placeholder" // TODO Add the real Logo
          className="md:w-28 lg:w-32 xl:w-36"
        />
        <Image
          src="/vercel.svg"
          width={150}
          height={150}
          alt="Placeholder" // TODO Add the real Logo
          className="md:w-28 lg:w-32 xl:w-36"
        />
      </article>
    </section>
  );
}
