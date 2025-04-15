import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import Image from "next/image";

/**
 * This component displays certification logos and brand logos for the company.
 * It is divided into two sections:
 * - Certifications: Displays accreditation logos.
 * - Brands: Displays logos of partner brands.
 * 
 * @returns {JSX.Element} The rendered Certifications component.
 */
export default function Certifications() {
  return (
    <section className="flex flex-col gap-5">
      {/* Certifications Section */}
      <article className="flex flex-col gap-5">
        <SectionHeader text="Certificaciones" />
        <div className="flex flex-row justify-around align-middle p-5">
          {/* Certification Logos */}
          <Image
            src={"/logo-CEP.png"}
            alt={"Logo_of_CEP"}
            width={1000}
            height={1000}
            className="w-2/5 h-1/3 sm:w-1/3 sm:h-1/4 md:w-1/5 md:h-1/6"
          />
          <Image
            src={"/logo-ANA.png"}
            alt={"Logo_of_ANA"}
            width={1000}
            height={1000}
            className="w-2/5 h-1/3 sm:w-1/3 sm:h-1/4 md:w-1/5 md:h-1/6"
          />
        </div>
      </article>

      {/* Brands Section */}
      <article className="flex flex-col gap-5">
        <SectionHeader text="Marcas con las que trabajamos" />
        <div className="flex flex-row justify-around align-middle p-5">
          {/* Partner Brand Logos */}
          <Image
            src={"/logo-phonak.png"}
            alt={"Logo_of_PHONAK"}
            width={1000}
            height={1000}
            className="w-2/5 h-1/3 sm:w-1/3 sm:h-1/4 md:w-1/5 md:h-1/6"
          />
          <Image
            src={"/logo-starkey.png"}
            alt={"Logo_of_STARKEY"}
            width={1000}
            height={1000}
            className="w-2/5 h-1/3 sm:w-1/3 sm:h-1/4 md:w-1/5 md:h-1/6"
          />
        </div>
      </article>
    </section>
  );
}
