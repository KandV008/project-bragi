import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/common/header";
import Footer from "./ui/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { mainBackground } from "./ui/tailwindClasses";
import { Toaster } from 'react-hot-toast';
import { customLocalization } from "@/lib/translation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sain, Audífonos X Menos",
  description: "Sain is an e-commerce of earphones and accessories oriented to elder people. So the main pillars are accesibility, usability and affordable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={customLocalization}>
      <html lang="es">
        <head>
          {/* Other head elements like meta tags, link tags etc. */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </head>
        <body
          className={`${inter.className} flex flex-col min-h-screen align-middle ${mainBackground}`}
        >
          <NextTopLoader color="#05966A" crawl={false} height={5} showSpinner={false} speed={500}/>
          <header className="p-4 flex justify-end"></header>
          <Header />
          <div className="mt-20"></div>
          <main
            className="flex flex-col flex-grow justify-center 
            space-y-5 md:space-y-10 
            py-16 md:py-12 lg:py-10 2xl:py-5 
            w-11/12 xl:w-4/6 place-self-center"
          >
            <Toaster position="bottom-right"/>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
