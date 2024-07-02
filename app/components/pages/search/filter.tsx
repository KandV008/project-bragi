export default function Filter() {
  return (
    <section
      className=" p-5 rounded flex-col space-y-3
        bg-primary0 dark:bg-secondary2 text-primary2 dark:text-secondary0 h-full
        hidden md:flex w-64"
    >
      {/* Header */}
      <h1 className=" w-fit text-3xl font-bold text-primary2 dark:text-secondary0">
        Filtrar por:
        <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>

        </h1>
      {/* Adaptation Range */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Rango de Adaptación</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Leve</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2"> Moderada</label>
          <br></br>
          <input type="checkbox" id="range3" name="range3" value="range3" />
          <label htmlFor="range3"> Severa</label>
          <br></br>
          <input type="checkbox" id="range4" name="range4" value="range4" />
          <label htmlFor="range4"> Profunda</label>
          <br></br>
        </form>
      </article>
      {/* Water Dust Resistance */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Resistente al Polvo y al Agua</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Sí</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2"> No</label>
        </form>
      </article>
      {/* Brand */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Marca</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Phonak</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2"> Audio Service</label>
        </form>
      </article>
      {/* Location */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Ubicación</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Retroauricular - detrás de la oreja</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2">
            {" "}
            Intracanal - dentro del canal auditivo
          </label>
          <br></br>
          <input type="checkbox" id="range3" name="range3" value="range3" />
          <label htmlFor="range3">
            {" "}
            CIC - completamente en el canal auditivo
          </label>
          <br></br>
          <input type="checkbox" id="range4" name="range4" value="range4" />
          <label htmlFor="range4">
            {" "}
            RIC - auricular dentro del conducto auditivo
          </label>
          <br></br>
        </form>
      </article>
      {/* Level of Discretion */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Nivel de discrección</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Visible</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2"> Discreto</label>
          <br></br>
          <input type="checkbox" id="range3" name="range3" value="range3" />
          <label htmlFor="range3"> Imperceptible</label>
        </form>
      </article>
      {/* Degree Of Loss */}
      <article className="text-lg">
        <h1 className="text-xl font-bold">Grado de perdida</h1>
        <form action="" className="px-3">
          <input type="checkbox" id="range1" name="range1" value="range1" />
          <label htmlFor="range1"> Leve</label>
          <br></br>
          <input type="checkbox" id="range2" name="range2" value="range2" />
          <label htmlFor="range2"> Moderada</label>
          <br></br>
          <input type="checkbox" id="range3" name="range3" value="range3" />
          <label htmlFor="range3"> Severa</label>
          <br></br>
          <input type="checkbox" id="range4" name="range4" value="range4" />
          <label htmlFor="range4"> Profunda</label>
          <br></br>
        </form>
      </article>
    </section>
  );
}
