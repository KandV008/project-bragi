import Image from "next/image";
import Link from "next/link";

export default function FooterBody() {
  return (
    <section className="md:grid text-emerald-300 dark:text-emerald-200 text-sm md:text-xl
    flex flex-row flex-wrap md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-12">
      <article className="flex flex-col">
        <h1 className=" font-bold">Información</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">
          <Link href="/in-development" className="hover:underline">Conócenos</Link>
          <Link href="/in-development" className="hover:underline">Aviso Legal</Link>
          <Link href="/in-development" className="hover:underline">Política de Cookies</Link>
          <Link href="/in-development" className="hover:underline">Política de privacidad</Link>
          <Link href="/in-development" className="hover:underline">Términos y condiciones</Link>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Atención al cliente</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">          <a className="hover:underline">Servicios</a>
          <Link href="/in-development" className="hover:underline">Pide Cita</Link>
          <Link href="/in-development" className="hover:underline">Derecho de desistimiento</Link>
          <Link href="/in-development" className="hover:underline">Garantías</Link>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Mi cuenta</h1>
        <div className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base">          
          <Link href="/profile" className="hover:underline">Mi Cuenta</Link>
          <Link href="/profile/shoppingList" className="hover:underline">Mi Cesta</Link>
          <Link href="/profile/favorites" className="hover:underline">Mis Favoritos</Link>
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
