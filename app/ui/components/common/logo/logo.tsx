import Image from "next/image";
import Link from "next/link";

/**
 * Logo component that renders the brand logo with support for both light and dark modes.
 * The logo is responsive, displaying different sizes depending on the viewport and theme mode (light or dark).
 *
 * - Light mode logos are displayed when the dark theme is not active.
 * - Dark mode logos are displayed when the dark theme is active.
 * - The logos are responsive with different sizes for different screen widths (sm, md, lg, xl).
 *
 * @returns JSX.Element - A clickable logo that redirects to the homepage.
 */
export default function Logo() {
  return (
    <Link href={"/"} className="flex flex-col items-center w-fit">
      {/* Light Mode */}
      <>
        <Image
          src="/brand/logo_medium_sain_dark_emerald.png"
          width={1000}
          height={1000}
          alt="light_medium_logo"
          className="block dark:hidden w-20
                    sm:hidden sm:w-28
                    md:block  
                    lg:hidden"
        />
        <Image
          src="/brand/logo_large_sain_dark_emerald.png"
          width={1000}
          height={1000}
          alt="light_big_logo"
          className="hidden dark:hidden w-32
                    sm:block 
                    md:hidden 
                    lg:block 
                    xl:w-36"
        />
      </>
      {/* Dark Mode */}
      <>
        <Image
          src="/brand/logo_medium_sain_light_emerald.png"
          width={1000}
          height={1000}
          alt="dark_medium_logo"
          className="hidden dark:block w-20  
                    sm:dark:hidden sm:w-28
                    md:dark:block
                    lg:dark:hidden"
        />
        <Image
          src="/brand/logo_large_sain_light_emerald.png"
          width={1000}
          height={1000}
          alt="dark_big_logo"
          className="hidden w-32
                    sm:dark:block
                    md:dark:hidden
                    lg:dark:block  
                    xl:w-36"
                   
        />
      </>
    </Link>
  );
}
