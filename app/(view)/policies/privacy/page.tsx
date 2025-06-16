import ArticleHeader from "@/app/ui/components/tags/articleHeader/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Política de Privacidad",
};

export default function Page(): JSX.Element {
  return (
    <>
      <SectionHeader
        text={"Política de Privacidad"}
        id="pol-tica-de-privacidad"
      />
      <p>
        De conformidad con la normativa vigente en materia de protección de
        datos así como de nuestro compromiso de transparencia en relación con el
        tratamiento de sus datos personales, a continuación le proporcionamos la
        información en materia de protección de datos, acerca de dicho
        tratamiento a través del website{" "}
        <a href="https://www.audifonosxmenos.com/">
          https://www.audifonosxmenos.com/
        </a>{" "}
        (en adelante, el “Website”) titularidad de AFORDA VISION, S.L.{" "}
      </p>
      {/* ¿QUIÉN ES EL RESPOSABLE DEL TRATAMIENTO DE SUS DATOS? */}
      <>
        <ArticleHeader
          text={"¿Quién es el responsable del tratamiento de sus datos?"}
          id="-qui-n-es-el-responsable-del-tratamiento-de-sus-datos-"
        />
        <p>
          El responsable del tratamiento de sus datos es AFORDA VISION, S.L.
          (entidad titular y que explota el Website) con CIF número B-54584552
          con dirección en calle Santa Lucía 12, 03530 – Nucia (La) y dirección
          de correo electrónico de contacto contact@audifonosxmenos.es .{" "}
        </p>
      </>
      {/* ¿CUÁLES SON LAS FINALIDADES Y LEGITIMACIÓN DEL TRATAMIENTO DE SUS DATOS? */}
      <>
        <ArticleHeader
          text={
            "¿Cuáles son las finalidades y legitimación del tratamiento de sus datos?"
          }
          id="-cu-les-son-las-finalidades-y-legitimaci-n-del-tratamiento-de-sus-datos-"
        />
        <h2 id="-cu-les-son-las-finalidades-y-legitimaci-n-del-tratamiento-de-sus-datos-">
          ¿Cuáles son las finalidades y legitimación del tratamiento de sus
          datos?
        </h2>
        <p>
          Respecto a los usuarios que visiten nuestro Website (
          <strong>“visitas Website”</strong>):
        </p>
        <ul className="px-5">
          <li>
            * Sus datos personales correspondientes a la información de carácter
            técnico sobre el dispositivo con el que accede a nuestro Website
            (i.e. dirección de protocolo de internet utilizada (dirección IP),
            fecha y hora de acceso, página(s) visitada(s), el tipo de
            dispositivo y versión del sistema operativo y el navegador utilizado
            y su versión) que nuestro Website recoge de forma automática con su
            visita serán tratados con la finalidad de asegurar el funcionamiento
            de nuestro Website así como evaluar y asegurar la seguridad y
            estabilidad de nuestro Website y sistemas, siendo la base jurídica
            del tratamiento nuestro interés legítimo en asegurar el
            funcionamiento y seguridad de nuestro Website y evitar que se
            cometan accesos o navegaciones fraudulentas
          </li>
        </ul>
        <p>
          Respecto a los usuarios registrados de la Tienda Online del Website
          (en adelante, los <strong>“Usuarios de la Tienda Online”</strong>):
        </p>
        <ul className="px-5">
          <li>
            * Sus datos personales de carácter identificativo que debe
            proporcionar de forma obligatoria en el momento de registrarse como
            Usuario de la Tienda Online (i.e. nombre y apellidos, número de DNI
            o pasaporte , número de teléfono, dirección de correo electrónico y
            dirección postal) así como cualquier otro que nos pudiera facilitar
            durante cualquier proceso de compra a través de la Tienda Online
            serán tratados con la finalidad de (i) permitir su registro en
            nuestra Tienda Online y poder tramitar y enviarle los productos que
            compre a través de la Tienda Online, (ii) poder prestarle la
            garantía legal y, en su caso, comercial de los productos adquiridos
            así como cualquier otro derecho reconocido por la normativa; siendo
            la base jurídica de dichos tratamientos (i) la ejecución de la
            relación contractual que mantenemos con Usted en tanto esté
            registrado a nuestra Tienda Online, (ii) el cumplimiento de la
            normativa en materia de consumidores y usuarios (i.e. el Real
            Decreto 1/2007, de 16 de noviembre, por el que se aprueba el texto
            refundido de la Ley General para la Defensa de los Consumidores y
            Usuarios y otras leyes complementarias) en relación con la garantía
            de nuestros productos y cualquier otro derecho reconocido por la
            referida normativa, así como (iii) nuestro interés legítimo en
            conocer su experiencia de compra y poder mejorar nuestros productos
            y servicios en relación con el envío de nuestras encuestas de
            satisfacción.
          </li>
        </ul>
        <p>
          En cualquier momento, podrá retirar su consentimiento mediante el
          apartado “Configurar cookies” de nuestro Website o la desinstalación
          de dichas cookies a través de su navegador. En caso de retirar su
          consentimiento, ello no afectará a la licitud de los tratamientos
          efectuados con anterioridad.{" "}
        </p>
        <p>
          Respecto a aquellos usuarios que hayan utilizado algunas de las vías
          de contacto habilitadas en cada momento a través del Website – a
          efectos expositivos pero no limitativos, el formulario de contacto y
          la dirección de correo electrónico:
        </p>
        <ul className="px-5">
          <li>
            * Sus datos de carácter identificativo que nos proporcione serán
            tratados única y exclusivamente con la finalidad de poder atender,
            gestionar y resolver la consulta y/o incidencia por la que nos
            hubiera contactado, siendo la base jurídica el mantenimiento de la
            relación contractual o de las medidas precontractuales solicitadas
            por Usted para la resolución de la consulta y/o incidencia
            planteada.
          </li>
        </ul>
        <p>
          Respecto a aquellos usuarios que hayan utilizado algunas de las vías
          de contacto habilitadas en cada momento a través del formulario “Pide
          Cita” del Website (en adelante, los{" "}
          <strong>“Solicitantes de cita previa”</strong>):
        </p>
        <ul className="px-5">
          <li>
            * Sus datos de carácter identificativo que nos proporcione serán
            tratados única y exclusivamente con la finalidad de poder reservarle
            una cita con uno de nuestros empleados en la tienda que haya
            seleccionado, siendo la base jurídica la ejecución de la relación
            contractual o de las medidas precontractuales solicitadas por Usted.
          </li>
        </ul>
        <p>
          En caso de facilitarnos datos de terceros, Usted manifiesta contar con
          el consentimiento de los mismos o con legitimación suficiente,
          comprometiéndose a trasladarles la información contenida en esta
          Política de Privacidad, eximiéndonos de cualquier responsabilidad en
          este sentido. En cualquier caso, podremos llevar a cabo las
          verificaciones periódicas para constatar este hecho, adoptando las
          medidas de diligencia debida que correspondan, de conformidad con la
          normativa aplicable.
        </p>
      </>
      {/* ¿POR CUÁNTO TIEMPO CONSERVAREMOS SUS DATOS? */}
      <>
        <ArticleHeader
          text={"¿Por cuánto tiempo conservaremos sus datos?"}
          id="-por-cu-nto-tiempo-conservaremos-sus-datos-"
        />
        <p>Los datos personales que nos facilite serán conservados:</p>
        <ol className="px-5">
          <li>
            i. <strong>Respecto a las Visitas Web</strong>: durante el tiempo
            estrictamente necesario para asegurar la funcionalidad y seguridad
            de nuestro Website.
          </li>
          <li>
            ii. <strong>Respecto a los Usuarios de la Tienda Online</strong>: En
            tanto que dure la relación contractual que mantenemos con Usted y en
            tanto que Usted no solicite su baja como usuario registrado de la
            Tienda Online o supresión a través de los medios indicados más
            abajo.
          </li>
          <li>
            iii. <strong>Respecto a los Contactos</strong>: Durante el tiempo
            estrictamente necesario para atender, gestionar y resolver la
            consulta y/o incidencia por la que nos hubiera contactado.
          </li>
          <li>
            iv. <strong>Respecto a los Solicitantes de Cita Previa</strong>:
            Durante el tiempo estrictamente necesario hasta conseguir una cita
            previa con uno de nuestros empleados en la tienda que haya
            solicitado.
          </li>
        </ol>
        <p>
          No obstante, lo anterior, tenga en cuenta que podremos conservar sus
          datos de estar obligados a ello o cuando resulte preciso hasta la
          prescripción de las responsabilidades legales en cuyo caso quedarán
          debidamente bloqueados a disposición exclusivamente de los jueces y
          tribunales y las administraciones públicas competentes.
        </p>
      </>
      {/* ¿A QUÉ DESTINATARIOS SE COMUNICARÁN SUS DATOS? */}
      <>
        <ArticleHeader
          text={"¿A qué destinatarios se comunicarán sus datos?"}
          id="-a-qu-destinatarios-se-comunicar-n-sus-datos-"
        />
        <p>
          Sus datos personales no serán comunicados a ningún tercero, salvo que
          estemos obligados legalmente a hacerlo, es decir, recibamos un
          requerimiento administrativo o judicial que nos obligara a comunicar
          sus datos a una autoridad administrativa o judicial, en cuyo caso
          únicamente comunicaremos los datos a los que estaríamos estrictamente
          obligados.
        </p>
        <p>
          Lo anterior es sin perjuicio de los proveedores a los que podemos
          recurrir para la prestación de los servicios solicitados y que, en
          todo caso, los tratarán en su condición de encargados del tratamiento
          única y exclusivamente para la prestación de los servicios. En caso de
          encontrarse éstos fuera del Espacio Económico Europeo, intentaremos
          utilizar proveedores ubicados en territorios que ofrezcan un nivel
          adecuado de protección de datos (i.e. territorios que cuenten con una
          decisión de adecuación por parte de la Comisión Europea) y de
          encontrarse éstos fuera, ofreceremos las garantías adecuadas a través
          de la utilización de las cláusulas tipo de protección de datos
          adoptadas por la Comisión Europea que garanticen que Usted cuente con
          derechos exigibles y acciones legales efectivas. Puede obtener
          información adicional acerca de dichas garantías adecuadas poniéndose
          en contacto con nosotros a través de uno de los medios de contacto
          indicados más arriba.
        </p>
        <p>
          Tenga en cuenta que no tratamos ni accedemos a los datos con los que
          pague sus compras a través de la Tienda Online (tarjeta de débito y/o
          crédito o número de cuenta en PayPal entre otros ), facilitando Usted
          los datos directamente ante nuestro proveedor de la pasarela de pagos
          de nuestra Tienda Online o del proveedor de la plataforma de pago del
          medio de pago que elija para cada compra entre los que ofrezcamos en
          cada momento.{" "}
        </p>
      </>
      {/* ¿CUÁLES SON SUS DERECHOS CUANDO NOS FACILITA SUS DATOS? */}
      <>
        <ArticleHeader
          text={"¿Cuáles son sus derechos cuando nos facilita sus datos?"}
          id="-cu-les-son-sus-derechos-cuando-nos-facilita-sus-datos-"
        />
        <ul className="px-5">
          <li>
            <p>
              * <strong>Acceso, rectificación y supresión</strong>: Usted tiene
              derecho en cualquier momento a solicitar el acceso a sus datos
              personales, solicitar la rectificación de los datos inexactos, así
              como solicitar su supresión.
            </p>
          </li>
          <li>
            <p>
              * <strong>Limitación y portabilidad</strong>: En determinadas
              ocasiones, puede tener derecho a solicitar la limitación del
              tratamiento de sus datos, en cuyo caso únicamente los
              conservaremos para el ejercicio o defensa de reclamaciones, así
              como a solicitar la portabilidad de sus datos.
            </p>
          </li>
        </ul>
        <p>
          Podrá ejercer los derechos expuestos anteriormente mediante
          comunicación escrita a AFORDA VISION S.L. (calle Santa Lucía 12, 03530
          – Nucia (La)) o por correo electrónico a contact@audifonosxmenos.es
          indicando el derecho que solicita e identificándose, en su caso, con
          una fotocopia de su DNI o documento equivalente.
        </p>
        <p>
          Le informamos que atenderemos su petición dentro de los plazos
          legalmente establecidos y que, en cualquier caso, tiene derecho a
          presentar una reclamación ante la Agencia Española de Protección de
          Datos (<a href="https://www.aepd.es/es">https://www.aepd.es/es</a>).
        </p>
      </>
      <p>
        <strong>Última actualización</strong>: Mayo 2025
      </p>
    </>
  );
}
