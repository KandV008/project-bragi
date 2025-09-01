import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../ui/components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { mainBackground } from "../ui/tailwindClasses";
import { Toaster } from "react-hot-toast";
import { customLocalization } from "@/lib/translation";
import Footer from "../ui/components/common/footer/footer";
import CookiesPopUp from "../ui/components/popUps/cookiesPopUp/cookiesPopUp";
import TermsAndConditionsPopUp from "../ui/components/popUps/termsAndConditionsPopUp/termsAndConditionsPopUp";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the page, defining the title and description.
 */
export const metadata: Metadata = {
  title: {
    default: "Audífonos X menos",
    template: "%s - Audífonos X menos",
  },
  description:
    "Professional e-commerce for hearing aids and accessories, with the option to request appointments.",
  twitter: {
    card: "summary_large_image"
  }
};

/**
 * Root layout component that wraps around all pages.
 * It includes the header, footer, and other global settings such as ClerkProvider, font, and NextTopLoader.
 *
 * @param {React.ReactNode} children - The children components that are rendered within the main section.
 * @returns {JSX.Element} The root layout component with global settings applied.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  return (
    <ClerkProvider localization={customLocalization}>
      <html lang="es">
        <head>
          {/* Meta tags and favicon for the page */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </head>
        <body
          className={`${inter.className} flex flex-col min-h-screen align-middle ${mainBackground}`}
        >
          {/* Loader displayed at the top of the page */}
          <NextTopLoader
            color="#05966A"
            crawl={false}
            height={5}
            showSpinner={false}
            speed={500}
          />
          <TermsAndConditionsPopUp />
          <CookiesPopUp />

          {/* Header section */}
          <header className="p-4 flex justify-end"></header>
          <Header />

          {/* Main content section */}
          <div className="mt-20"></div>
          <main
            className="flex flex-col flex-grow justify-center place-self-center
            space-y-5 md:space-y-10 
            py-16 md:py-12 lg:py-10 2xl:py-5 
            w-11/12 xl:w-4/6 "
          >
            {/* Toast notifications */}
            <Toaster position="bottom-right" />
            {children}
          </main>

          {/* Footer section */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
