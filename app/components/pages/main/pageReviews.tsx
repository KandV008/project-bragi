import Image from "next/image";

export default function PageReviews() {
  return (
    <section>
      <Image
        src="/placeholder-pageReviews.png"
        width={1000}
        height={1000}
        alt="Placeholder" // TODO Add the real Logo
        className="h-full w-full object-cover"
      />
    </section>
  );
}
