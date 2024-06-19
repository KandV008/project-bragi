import Image from "next/image";

export default function Certifications() {
  return (
    <section>
      <Image
        src="/placeholder-certifications.png"
        width={1500}
        height={1500}
        alt="Placeholder" // TODO Add the real image
        className="h-full w-full object-cover"
      />
    </section>
  );
}
