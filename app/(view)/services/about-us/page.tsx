import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import TeamMember from "@/app/ui/containers/services/about-us/teamMember";
import { componentBackground, componentText } from "@/app/ui/tailwindClasses";
import { Metadata } from "next";
import Link from "next/link";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Sobre nosotros",
};

/**
 * Page component that displays information about the team and company.
 * This component renders a section header, a team member list, and a description of the company's values and services.
 *
 * @returns {JSX.Element} The "Sobre nosotros" (About Us) page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <SectionHeader text={"Sobre Nosotros"} />
      {/* Team Members */}
      <section
        className={`flex flex-row flex-wrap justify-around w-full p-4 md:p-8 rounded-xl ${componentBackground}`}
      >
        <TeamMember
          name={"Irina Osuna"}
          imageURL={"/team/picture_irina.HEIC"}
          rol={"Encargada"}
        />
        <TeamMember
          name={"Jorge Martínez de Lizarduy"}
          imageURL={"/team/picture_jorge.HEIC"}
          rol={"Encargada"}
        />
        <TeamMember
          name={"Liz Torres"}
          imageURL={"/team/picture_liz.HEIC"}
          rol={"Encargada"}
        />
        <TeamMember
          name={"Natalia Kostornichenko"}
          imageURL={"/team/picture_natalia.HEIC"}
          rol={"Encargada"}
        />
      </section>
      {/* Description */}
      <section
        className={`flex flex-col gap-2 ${componentText} text-base sm:text-lg font-semibold text-justify`}
      >
        <p>
          Nosotros estamos comprometidos en ofrecerte la mejor experiencia de
          compra online. Con un enfoque en calidad y atención personalizada, te
          ayudamos a encontrar los audífonos ideales para tu estilo de vida. Nos
          aseguramos de que cada cliente reciba un producto que combine el mejor
          sonido con confort y tecnología de vanguardia.{" "}
        </p>
        <p className="text-center text-xl sm:text-2xl">
          ¡Descubre la diferencia de escuchar con claridad y precisión desde la
          comodidad de tu hogar!
        </p>
        <p>
          No dude en{" "}
          <Link
            className="hover:underline font-extrabold"
            href={"/services/contact"}
          >
            contactar
          </Link>{" "}
          con nosotros si lo necesitas.
        </p>
      </section>
    </>
  );
}
