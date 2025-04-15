import NavButton from "../../../components/buttons/navButton/navButton";

/**
 * This component renders a set of navigation buttons for different sections of the website.
 * It includes links to product categories, services, and company information.
 * 
 * @returns {JSX.Element} The rendered SubHeaderButtons component.
 */
export default function SubHeaderButtons(): JSX.Element {
  return (
    <>
      <NavButton text="Audífonos" href={"/search?category=EARPHONE"} />
      <NavButton text="Accesorios" href={"/search?category=ACCESSORY"} />
      <NavButton text="Servicios" href={"/services"} />
      <NavButton text="Nosotros" href={"/services/about-us"} />
      <NavButton text="Pedir Cita" href={"/services/appointment"} />
    </>
  );
}
