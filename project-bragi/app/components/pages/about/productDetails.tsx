import Image from "next/image";

export default function ProductDetails() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row rounded gap-5 bg-white
    border-2 border-primary2 dark:border-secondary1 text-primary2 dark:text-secondary0 p-5"
    >
      <article className="flex flex-col md:w-1/2 gap-2">
        <h2 className="text-2xl font-bold">Descripción</h2>
        <p className="text-justify">
          Audífono retroauricular óptimo recargable con conectividad directa a
          teléfonos inteligentes IOS mediante Bluetooth® sin necesidad de un
          transmisor adicional. Equipado con una batería de ion-litio
          especialmente diseñada. Las de baterías de ion-litio proporcionan una
          carga más rápida, una mayor durabilidad y un menor deterioro con el
          paso de los años. Cuenta con un nivel de prestaciones y
          funcionalidades óptimas que te permitirán disfrutar de una correcta
          audición en diferentes ambientes sonoros. Su tecnología de vanguardia
          te permitirá escuchar música o recibir llamadas desde el teléfono
          móvil directamente en los audífonos. Idóneo para pérdidas auditivas
          moderadas a severas.
        </p>
      </article>
      <article className="flex flex-col md:w-1/2 gap-2">
        <h2 className="text-2xl font-bold">Características</h2>
        <div>
          <h4 className="text-lg font-bold">Ubicación</h4>
          <span className="text-base p-2">Retroauricular -detrás de la oreja</span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Prestaciones Audífonos</h4>
          <span className="text-base p-2">Óptimo</span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Nivel de Discreción</h4>
          <span className="text-base p-2">Visible</span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Resistente al Polvo y al Agua</h4>
          <span className="text-base p-2">Sí</span>
        </div>
        <div>
          <h4 className="text-lg font-bold">Usos</h4>
          <Image
            src="/placeholder-usos.png"
            width={1500}
            height={1500}
            alt="Placeholder" // TODO Add the real Logo
            className="h-16 w-64 xl:h-10 xl:w-48 2xl:h-16 2xl:w-56"
          />
        </div>
      </article>
    </div>
  );
}
