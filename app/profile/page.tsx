import { faCartShopping, faHeart, faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import MediumButtonWithIcon from "../components/buttons/mediumButtonWithIcon";

export default function Page() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6">
      <section className="flex flex-col place-self-center p-5 items-center gap-3
      border-2 border-primary2 text-primary2 rounded-xl w-fit ">
        <h2 className="text-3xl font-bold">KandV008</h2>
        <h2 className="text-xl font-semibold">iv.mardeliz.software@gmail.com</h2>
        <div className="w-full border-t mb-1 border-primary2 dark:border-secondary0"></div>
        <h1 className="text-lg">¿Qué desea hacer con su cuenta?</h1>
        <MediumButtonWithIcon
          icon={faHeart}
          text={"Favoritos"}
          subtext={"Ver tu lista de favoritos"}
          type={'default'}
        />
        <MediumButtonWithIcon
          icon={faCartShopping}
          text={"Cesta"}
          subtext={"Ver tu lista de la compra"}
          type={'default'}
        />
        <MediumButtonWithIcon 
            icon={faCircleXmark} 
            text={"Cerrar Sesión"} 
            subtext={"Podrás volver más tarde"} 
            type={'warning'}
        />
        <MediumButtonWithIcon 
            icon={faTrash} 
            text={"Borrar Cuenta"} 
            subtext={"Eliminaremos tu cuenta"} 
            type={'danger'}
        />
      </section>
    </main>
  );
}