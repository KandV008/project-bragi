import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/next.svg"
        width={150}
        height={150}
        alt="Placeholder" // TODO Add the real Logo
      />
    </>
  );
}
