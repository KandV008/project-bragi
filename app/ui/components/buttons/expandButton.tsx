"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  componentBackground,
  componentText,
  fillDefaultComponentBackground,
  hoverFillDefaultComponentBackground,
} from "../../tailwindClasses";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavButton from "./navButton";

export default function ExpandButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        onClick={toggleExpandMenu}
        id="expand-toggle"
        className={`w-fit rounded-2xl border-2 border-transparent p-3 
              ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
              ${componentText}`}
      >
        <FontAwesomeIcon icon={faBars} className="size-5" />
      </button>
      <div className="pt-2 z-20 absolute right-3 origin-top-right bg-transparent focus:outline-none">
        <div className="flex flex-col gap-1" role="none">
          {isExpanded ? (
            <section className={`flex flex-col w-fit p-2 gap-1 rounded-md ${componentBackground}`}>
              <NavButton text="Audífonos" href={"/search?category=EARPHONE"} />
              <NavButton
                text="Accesorios"
                href={"/search?category=ACCESSORY"}
              />
              <NavButton text="Servicios" href={"/in-development"} />
              <NavButton text="Nosotros" href={"/in-development"} />
              <NavButton text="Pedir Cita" href={"/in-development"} />
            </section>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
