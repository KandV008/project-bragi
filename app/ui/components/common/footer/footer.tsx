import Image from "next/image";
import Link from "next/link";
import UnorderedListWithLink from "../../tags/unorderedListWithLink/unorderedListWithLink";

/**
 * Footer component for the website. It contains links to information pages, customer service, account management, 
 * a logo, and powered by logos. It is split into a top and bottom section.
 * 
 * @returns The Footer JSX element.
 */
export default function Footer() {
  return (
    <footer className="bg-emerald-950 dark:bg-emerald-900 flex flex-col p-5">
      {/* Top Footer */}
      <section className="sm:w-5/6 xl:w-4/6 place-self-center">
        <section
          className="md:grid text-emerald-300 dark:text-emerald-200 text-sm md:text-xl
                     flex flex-row flex-wrap justify-center md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-12"
        >
          {/* Information Links */}
          <UnorderedListWithLink
            title={"Información"}
            elements={[
              "Conócenos",
              "Aviso Legal",
              "Política de Cookies",
              "Política de Privacidad",
              "Términos y condiciones",
            ]}
            links={[
              "/in-development",
              "/in-development",
              "/in-development",
              "/in-development",
              "/in-development",
            ]}
          />
          {/* Customer Service Links */}
          <UnorderedListWithLink
            title={"Atención al cliente"}
            elements={[
              "Servicios",
              "Pide Cita",
              "Derecho de desistimiento",
              "Garantías",
            ]}
            links={[
              "/in-development",
              "/in-development",
              "/in-development",
              "/in-development",
            ]}
          />
          {/* Account Links */}
          <UnorderedListWithLink
            title={"Mi cuenta"}
            elements={["Mi Cuenta", "Mi Cesta", "Mis Favoritos"]}
            links={["/profile", "/profile/shoppingList", "/profile/favorites"]}
          />
          {/* Logo and Powered By Section */}
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
                {/* Vercel Logo */}
                <Link href={"https://vercel.com"}>
                  <Image
                    src="/vercel.svg"
                    width={150}
                    height={150}
                    alt="vercel_logo"
                    className="w-24"
                  />
                </Link>
                {/* Next.js Logo */}
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
        {/* Divider */}
        <div className="w-full border-t my-3 border-emerald-300 dark:border-emerald-100"></div>
        {/* Bottom Footer */}
        <section className="flex flex-row text-emerald-400 dark:text-emerald-100 text-sm md:text-base">
          <small>
            Copyright © 2025, @KandV008. Todos los derechos reservados.
          </small>
        </section>
      </section>
    </footer>
  );
}
