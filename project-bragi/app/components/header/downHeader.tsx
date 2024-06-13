import NavButton from "./navButton";


export default function DownHeader(){
    return (
        <div className="flex-row justify-center items-center space-x-4 hidden md:flex">
            <NavButton text="Audífonos" />
            <NavButton text="Accesorios" />
            <NavButton text="Servicios" />
            <NavButton text="Nosotros" />
            <NavButton text="Pedir Cita" />
        </div>
    );
}