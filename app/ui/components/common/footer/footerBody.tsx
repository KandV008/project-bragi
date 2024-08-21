import Image from "next/image";
import Link from "next/link";

export default function FooterBody() {
  return (
    <section
      className="md:grid text-emerald-300 dark:text-emerald-200 text-sm md:text-xl
    flex flex-row flex-wrap justify-center md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-12"
    >
      <article className="flex flex-col">
        <h1 className=" font-bold">Información</h1>
        <div
          className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base"
        >
          <Link href="/in-development" className="hover:underline">
            Conócenos
          </Link>
          <Link href="/in-development" className="hover:underline">
            Aviso Legal
          </Link>
          <Link href="/in-development" className="hover:underline">
            Política de Cookies
          </Link>
          <Link href="/in-development" className="hover:underline">
            Política de privacidad
          </Link>
          <Link href="/in-development" className="hover:underline">
            Términos y condiciones
          </Link>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Atención al cliente</h1>
        <div
          className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base"
        >
          {" "}
          <a className="hover:underline">Servicios</a>
          <Link href="/in-development" className="hover:underline">
            Pide Cita
          </Link>
          <Link href="/in-development" className="hover:underline">
            Derecho de desistimiento
          </Link>
          <Link href="/in-development" className="hover:underline">
            Garantías
          </Link>
        </div>
      </article>
      <article className="flex flex-col">
        <h1 className="font-bold">Mi cuenta</h1>
        <div
          className="flex flex-col text-emerald-400 dark:text-emerald-100
        px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base"
        >
          <Link href="/profile" className="hover:underline">
            Mi Cuenta
          </Link>
          <Link href="/profile/shoppingList" className="hover:underline">
            Mi Cesta
          </Link>
          <Link href="/profile/favorites" className="hover:underline">
            Mis Favoritos
          </Link>
        </div>
      </article>
      <article className="flex flex-col gap-3 justify-center">
        <Link href={"/"}>
          <Image
            src="/brand/logo_large_sain_white.png"
            width={150}
            height={150}
            alt="light_big_logo"
            className="md:w-28 lg:w-32 xl:w-36"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-bold">Impulsado por</h3>
          <div className="flex flex-row lg:flex-col xl:flex-row gap-3 items-center">
            <Link href={"https://vercel.com"}>
              <Image
                src="/vercel.svg"
                width={150}
                height={150}
                alt="vercel_logo"
                className="w-24"
              />
            </Link>
            <Link href={"https://nextjs.org"}>
              <Image
                src="/next.svg"
                width={150}
                height={150}
                alt="next_logo"
                className="w-20"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
