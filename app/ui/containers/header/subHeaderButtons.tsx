import NavButton from "../../components/buttons/navButton";

export default function SubHeaderButtons() {
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
