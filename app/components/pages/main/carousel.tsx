import Image from "next/image";
import SmallButton from "../../smallButton";

export default function CarouselWithAction() {
  return (
    <section>
      <div className="relative h-full w-full">
        <Image
          src="/placeholder-carousel.avif"
          width={1500}
          height={1500}
          alt="Placeholder" // TODO Add the real Logo
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full sm:w-1/2 inset-0 grid h-full place-items-center bg-black/75">
          <div className="p-3 w-5/6 sm:w-3/4 text-center text-white">
            <h1 className="mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Pida una cita gratuita
            </h1>
            <article className="mb-4 md:mb-12 opacity-80 text-sm sm:text-base">
            Le devolveremos el doble de la diferencia de precio 
            si encuentra un audífono comparable a mejor precio en la calle. 
            </article>
            <div className="flex justify-center gap-2">
              <SmallButton text="Pida ya su cita" href="localhost:3000/"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
