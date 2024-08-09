"use client";

import ThemeToggle from "../themeToggle";
import NavButton from "./navButton";
import { useRouter } from "next/navigation";

export default function DownHeader() {
  const router = useRouter();

  const handleEarphoneClick = () => {
    router.push("/search?category=EARPHONE");
  };

  const handleAccessoriesClick = () => {
    router.push("/search?category=ACCESSORY");
  };

  const handleServicesClick = () => {
    router.push("/in-development") // TODO
  };

  const handleContactClick = () => {
    router.push("/in-development") // TODO
  };

  const handleDateClick = () => {
    router.push("/in-development") // TODO
  };

  return (
    <div className="flex-row justify-center items-center space-x-4 hidden md:flex pb-2 2xl:pb-0">
      <NavButton text="Audífonos" onClick={handleEarphoneClick} />
      <NavButton text="Accesorios" onClick={handleAccessoriesClick} />
      <NavButton text="Servicios" onClick={handleServicesClick} />
      <NavButton text="Nosotros" onClick={handleContactClick} />
      <NavButton text="Pedir Cita" onClick={handleDateClick} />
      <div className="block 2xl:hidden">
        <ThemeToggle />
      </div>
    </div>
  );
}
