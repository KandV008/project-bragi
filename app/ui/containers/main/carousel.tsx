'use client';

import Image from "next/image";
import SmallButton from "../../../ui/components/buttons/smallButton";

/**
 * This component displays a promotional carousel with an overlayed call-to-action.
 * It includes a background image and a button to request an appointment.
 * 
 * @returns {JSX.Element} The rendered CarouselWithAction component.
 */
export default function CarouselWithAction(): JSX.Element {
  return (
    <section>
      <div className="relative h-full w-full">
        {/* Background Image */}
        <Image
          src="/placeholder-carousel.avif"
          width={1500}
          height={1500}
          alt="Placeholder" // TODO: Replace with the actual image source
          className="h-full w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute w-full sm:w-1/2 inset-0 grid h-full place-items-center bg-black/75">
          <div className="p-3 w-5/6 sm:w-3/4 text-center text-white">
            {/* Title */}
            <h1 className="mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Pida una cita gratuita
            </h1>

            {/* Promotional Message */}
            <article className="mb-4 md:mb-12 opacity-80 text-sm sm:text-base">
              Le devolveremos el doble de la diferencia de precio 
              si encuentra un audífono comparable a mejor precio en la calle.
            </article>

            {/* Call-to-Action Button */}
            <div className="flex justify-center gap-2">
              <SmallButton text="Pida ya su cita" href="/in-development"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
