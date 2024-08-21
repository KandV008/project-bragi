import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex flex-col items-center w-fit">
      {/* Light Mode */}
      <>
        <Image
          src="/brand/logo_medium_sain_dark_emerald.png"
          width={1000}
          height={100}
          alt="light_medium_logo"
          className="block dark:hidden lg:hidden
                     w-20 sm:w-28"
        />
        <Image
          src="/brand/logo_large_sain_dark_emerald.png"
          width={1000}
          height={1000}
          alt="light_big_logo"
          className="hidden lg:block lg:dark:hidden
                   lg:w-32 xl:w-36 "
        />
      </>
      {/* Dark Mode */}
      <>
        <Image
          src="/brand/logo_medium_sain_light_emerald.png"
          width={1000}
          height={1000}
          alt="dark_medium_logo"
          className="hidden dark:block lg:hidden lg:dark:hidden
                     w-20 sm:w-28"
        />
        <Image
          src="/brand/logo_large_sain_light_emerald.png"
          width={1000}
          height={1000}
          alt="dark_big_logo"
          className="hidden lg:dark:block
                   lg:w-32 xl:w-36"
        />
      </>
    </Link>
  );
}
