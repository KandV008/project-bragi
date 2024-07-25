"use client";

import NavButton from "./navButton";
import { useRouter } from "next/navigation";

export default function DownHeader() {
  const router = useRouter();

  const handleEarphoneClick = () => {
    // TODO Get only Earphones
    router.push("/search");
  };

  const handleAccessoriesClick = () => {
    // TODO Get only Accessories
    router.push("/search");
  };

  const handleServicesClick = () => {
    // TODO
  };

  const handleContactClick = () => {
    // TODO
  };

  const handleDateClick = () => {
    // TODO
  };

  return (
    <div className="flex-row justify-center items-center space-x-4 hidden md:flex">
      <NavButton text="Audífonos" onClick={handleEarphoneClick} />
      <NavButton text="Accesorios" onClick={handleAccessoriesClick} />
      <NavButton text="Servicios" onClick={handleServicesClick} />
      <NavButton text="Nosotros" onClick={handleContactClick} />
      <NavButton text="Pedir Cita" onClick={handleDateClick} />
    </div>
  );
}
