import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { mainBackground } from "../ui/tailwindClasses";
import { customLocalization } from "@/lib/translation";
import Structure from "./structure";

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
    card: "summary_large_image",
  },
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
          <Structure>{children}</Structure>
        </body>
      </html>
    </ClerkProvider>
  );
}
