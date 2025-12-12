"use client";

import Header from "../ui/components/common/header/header";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "../ui/components/common/footer/footer";
import CookiesPopUp from "../ui/components/popUps/cookiesPopUp/cookiesPopUp";
import TermsAndConditionsPopUp from "../ui/components/popUps/termsAndConditionsPopUp/termsAndConditionsPopUp";
import { CountShoppingListContext } from "../ui/components/contexts/countShoppingListContext";
import { useState } from "react";

export default function Structure({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [counter, setCounter] = useState<number>(0);

  return (
    <CountShoppingListContext.Provider value={{ counter, setCounter }}>
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
            space-y-5 md:space-y-2 
            py-16 md:py-12 lg:py-10 2xl:py-5 
            w-11/12 xl:w-4/6 "
      >
        {/* Toast notifications */}
        <Toaster position="bottom-right" />
        {children}
      </main>

      {/* Footer section */}
      <Footer />
    </CountShoppingListContext.Provider>
  );
}
