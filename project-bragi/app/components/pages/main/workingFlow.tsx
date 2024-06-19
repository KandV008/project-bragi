import Image from "next/image";

export default function WorkingFlow() {
  return (
    <section>
      <Image
        src="/placeholder-workingFlow.png"
        width={1000}
        height={1000}
        alt="Placeholder" // TODO Add the real image
        className="h-full w-full object-cover"
      />
    </section>
  );
}
