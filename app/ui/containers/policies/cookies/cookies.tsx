'use client';

import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import CookiesPopUp from "@/app/ui/components/popUps/cookiesPopUp/cookiesPopUp";
import ArticleHeader from "@/app/ui/components/tags/articleHeader/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Cookies(): JSX.Element {
  const [configureCookies, hasConfigureCookies] = useState<boolean>(false);

  const handleAction = () => {
    hasConfigureCookies(true);
  }

  return (
    <div className="text-justify flex flex-col gap-2">
    <CookiesPopUp isConfiguration={configureCookies} setConfiguration={() => {hasConfigureCookies(false)}}/>
      <div className="flex flex-row justify-between">
        <SectionHeader text={"Política de cookies"} id="pol-tica-de-cookies" />
        <MediumButtonWithIcon
          icon={faGears}
          text={"Configurar Cookies"}
          subtext={""}
          type={"warning"}
          onClick={() => handleAction()}
        />
      </div>
      <p>
        A fin de dar cumplimiento a lo dispuesto en el artículo 22 de la Ley
        34/2002, de 11 de julio, de servicios de la sociedad de la información y
        de comercio electrónico, te informamos que AFORDA VISION S.L. (en
        adelante, <strong>“AUDIFONOS X MENOS”</strong> o{" "}
        <strong>“nosotros”</strong>) utiliza a través del sitio web
        www.audifonosxmenos.com (en adelante, el “Website”) cookies propias y de
        terceros para analizar el uso de nuestro Website. Cuando accedas al
        Website por primera vez, se te muestra un banner en el que se te pide
        que indiques si aceptas todas las cookies, las rechazas o si deseas
        configurarlas según tus preferencias, en cuyo caso puedes hacerlo a
        través del Configurador habilitado a tal efecto al que puedes acceder a
        través del mismo banner. Al darle al botón “Aceptar todas las cookies”
        sin rechazarlas a través del botón “rechazar cookies” o modificar su
        configuración a través del configurador habilitado a tal efecto, aceptas
        su instalación y el uso que hacemos de las mismas. Si deseas, con
        posterioridad, modificar tu configuración o revocar tu consentimiento,
        podrás hacerlo, en cualquier momento, a través del Configurador de
        Cookies que encontrarás más abajo o, alternativamente, de tu navegador.
        En el apartado ¿cómo administrar las cookies? de esta política
        encontrarás los pasos a seguir para revocar tu consentimiento y
        rechazarlas o modificar tu configuración en cualquier momento. La opción
        por la que optes en tu primera visita al Website se almacenará durante
        un plazo de hasta veinticuatro (24) meses para no volver a preguntarte
        cada vez que accedas al Website durante dicho plazo, salvo que cambies
        tu configuración o elimines las cookies a través de tu navegador.
      </p>
      {/* ¿QUÉ ES UNA COOKIE? */}
      <>
        <ArticleHeader text={"¿Qué es una cookie?"} id="-qu-es-una-cookie-" />
        <p>
          Una cookie es un pequeño fragmento de texto que los websites envían al
          navegador y que se almacenan en el terminal del usuario, el cual puede
          ser un ordenador personal, un teléfono móvil, un tablet, etc... y
          recuperan información cuando navegas por los sitios webs. En general,
          las cookies pueden utilizarse para finalidades muy diversas, como, por
          ejemplo, reconocerte como usuario, obtener información sobre tus
          hábitos de navegación o personalizar la forma en que se muestra el
          contenido tales como tu idioma u opciones preferidas, lo que puede
          facilitar tu próxima visita.
        </p>
      </>
      {/* ¿CÓMO SE UTILIZAN LAS COOKIES? */}
      <>
        <ArticleHeader
          text={"¿Cómo se utilizan las cookies?"}
          id="-c-mo-se-utilizan-las-cookies-"
        />
        <p>
          Al navegar por este Website y de haber aceptado su instalación, nos
          permite conocer, entre otras, la siguiente información:
        </p>
        <ul className="px-5">
          <li>* Información estadística del uso del Website.</li>
          <li>
            * Las últimas búsquedas realizadas en el Website y datos de
            personalización sobre éstas.
          </li>
        </ul>
      </>
      {/* TIPOLOGÍA DE COOKIES */}
      <>
        <ArticleHeader
          text={"Tipología de cookies"}
          id="tipolog-a-de-cookies"
        />
        <p>
          A continuación, te indicamos una relación de la tipología de cookies
          existentes en el mercado según la entidad que los gestione, el tiempo
          que permanecen activadas y su finalidad:
        </p>
        <p>(i) <strong>Tipología de cookies según la entidad que las gestione:</strong> </p>
        <ul className="px-5">
          <li>
            * <strong>Cookies propias:</strong> Son aquéllas que se envían al equipo terminal del
            usuario desde un equipo o dominio gestionado por nosotros y desde el
            que se presta el servicio solicitado por el usuario.{" "}
          </li>
          <li>
            * <strong>Cookies de tercero:</strong> Son aquéllas que se envían al equipo terminal
            del usuario desde un equipo o dominio que no es gestionado por
            nosotros, sino por otra entidad que trata los datos obtenidos a
            través de las cookies (ej. las cookies usadas por los complementos
            de redes sociales).{" "}
          </li>
        </ul>
        <p>
          (ii) <strong>Tipología de cookies según el plazo que permanecen activadas:</strong>
        </p>
        <ul className="px-5">
          <li>
            * <strong>Cookies de sesión:</strong> Son aquellas diseñadas para recabar y almacenar
            datos mientras el usuario accede a una página web. Se suelen
            emplease para almacenar información que sólo interesa conservar para
            la prestación del servicio solicitado por el usuario en una sola
            ocasión (por ejemplo, una lista de productos adquiridos) y
            desaparecen al terminar la sesión.
          </li>
          <li>
            * <strong>Cookies persistentes:</strong> Son aquellas en las que los datos siguen
            almacenados en el terminal y pueden ser accedidos y tratados durante
            un periodo definido por el responsable de la cookie, y que puede ir
            de unos minutos a varios años. (iii) Tipología de cookies según su
            finalidad:
          </li>
          <li>
            * <strong>Cookies técnicas:</strong> Son aquéllas que permiten al usuario la
            navegación a través de una página web, plataforma o aplicación y la
            utilización de las diferentes opciones o servicios que en ella
            existan, incluyendo aquellas que el editor utiliza para permitir la
            gestión y operativa de la página web y habilitar sus funciones y
            servicios, como, por ejemplo, controlar el tráfico y la comunicación
            de datos, identificar la sesión, acceder a partes de acceso
            restringido, recordar los elementos que integran un pedido, realizar
            el proceso de compra de un pedido, gestionar el pago, controlar el
            fraude vinculado a la seguridad del servicio, realizar la solicitud
            de inscripción o participación en un evento, contar visitas a efecto
            de la facturación de licencias del software con el que funciona el
            sitio (sitio web, plataforma o aplicación), utilizar elementos de
            seguridad durante la navegación, almacenar contenidos para la
            difusión de vídeos o sonido, habilitar contenidos dinámicos (por
            ejemplo, animación de carga de un texto o imagen,) o compartir
            contenidos a través de redes sociales. Dichas cookies están
            exceptuadas del deber de información y obtención del consentimiento
            de los usuarios, pero, por razones de transparencia, se informarán
            de esta tipología de cookies utilizadas en este Website en el
            siguiente apartado de la presente política.
          </li>
          <li>
            * <strong>Cookie de funcionalidad o personalización:</strong> Son aquéllas que
            permiten al usuario acceder al servicio con algunas características
            de carácter general predefinidas en función de una serie de
            criterios en el terminal del usuario como, por ejemplo, el idioma
            utilizado, el número de resultados a mostrar cuando el usuario
            realiza una búsqueda, el aspecto o contenido del servicio en función
            del tipo de navegador a través del cual el usuario accede al
            servicio o de la región desde la que accede al servicio, etc.{" "}
          </li>
          <li>
            * <strong>Cookies de análisis y medición:</strong> son aquellas que permiten al
            responsable de las mismas el seguimiento y análisis del
            comportamiento de los usuarios de los sitios web a los que están
            vinculadas, incluida la cuantificación de los impactos de los
            anuncios. La información recogida mediante este tipo de cookies se
            utiliza en la medición de la actividad de los sitios web, aplicación
            o plataforma, con el fin de introducir mejoras en función del
            análisis de los datos de uso que hacen los usuarios del servicio.
          </li>
          <li>
            * <strong>Cookies de publicidad comportamental:</strong> son aquellas que almacenan
            información del comportamiento de los usuarios obtenida a través de
            la observación continuada de sus hábitos de navegación, lo que
            permite desarrollar un perfil específico para mostrar publicidad en
            función del mismo. En este Wesbsite dichas cookies son establecidas
            por nuestros proveedores publicitarios con quienes trabajamos
            quienes se basan únicamente en la identificación única del navegador
            y del dispositivo para poder ofrecerte publicidad personalizada. En
            el siguiente apartado, encontrarás las cookies que se utilizan en
            este Website:
          </li>
        </ul>
      </>
      {/* TRANSFERENCIAS INTERNACIONALES */}
      <>
        <ArticleHeader
          text={"Transferencias internacionales"}
          id="transferencias-internacionales"
        />
        <p>
          Te informamos que se pueden llevar a cabo transferencias
          internacionales de datos a EE.UU. con la información obtenida a partir
          de ciertas cookies publicidad comportamental. Debes tener en cuenta
          que el nivel de protección de la privacidad que se ofrece en EE.UU. no
          es equivalente al que se aplica en el EEE y, por tanto, que cuando
          aceptas la instalación de esas cookies, aceptas de forma explícita que
          dichas transferencias puedan producirse. La información que se
          transfiere a EE.UU. está totalmente disociada. Puedes obtener más
          información de las transferencias a terceros países que, en su caso,
          realizan los terceros identificados en esta política de cookies en sus
          correspondientes políticas de cookies y/o privacidad.
        </p>
      </>{" "}
      {/* ¿CÓMO ADMINISTRAR LAS COOKIES? */}
      <>
        <ArticleHeader
          text={"¿Cómo administrar las cookies?"}
          id="-c-mo-administrar-las-cookies-"
        />
        <p>
          De desear modificar tu elección (incluso revocar tu consentimiento) en
          cuanto a las cookies con posterioridad a tu aceptación, configuración
          o rechazo, podrás hacerlo, en cualquier momento, a través de las
          siguientes opciones; (i) A través del Configurador de Cookies que
          encontrarás al final del Website o en el siguiente enlace: (ii) A
          través de la configuración de tu navegador. Consulta las opciones e
          instrucciones que ofrece tu navegador para ello:
        </p>
        <ul className="px-5">
          <li>
            *{" "}
            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&amp;&amp;hl=es">
              Google Chrome
            </a>
          </li>
          <li>
            *{" "}
            <a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">
              Mozilla Firefox
            </a>
          </li>
          <li>
            *{" "}
            <a href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d">
              Internet Explorer
            </a>
          </li>
          <li>
            *{" "}
            <a href="https://support.microsoft.com/es-es/microsoft-edge/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
              Microsoft Edge
            </a>
          </li>
          <li>
            * <a href="https://support.apple.com/es-es/105082">Safari</a>
          </li>
          <li>
            *{" "}
            <a href="https://help.opera.com/en/latest/security-and-privacy/">
              Opera
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que en caso de bloquear el uso de cookies en tu
          navegador es posible que algunos servicios o funcionalidades del
          Website no estén disponibles.
        </p>
        <p>
          En algunos navegadores se pueden configurar reglas específicas para
          administrar cookies por sitio Web, lo que ofrece un control más
          preciso sobre la privacidad. Esto significa que se puede inhabilitar
          cookies de todos los sitios salvo de aquellos en los que se confíe.
        </p>
        <p>
          Si necesitas más información, puedes contactar con nosotros a través
          del correo electrónico contact@audifonosxmenos.com.
        </p>
      </>
      {/* ACTUALIZACIÓN DE LA POLÍTICA DE COOKIES */}
      <>
        <ArticleHeader
          text={"Actualización de la Política de cookies"}
          id="actualizaci-n-de-la-pol-tica-de-cookies"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho de modificar
          esta Política de Cookies en cualquier momento por ajustarla a la
          realidad de cada momento, así como a las exigencias legislativas y
          jurisprudenciales que se puedan dictar en un futuro. En este sentido,
          te recomendamos consultar esta Política de forma frecuente.{" "}
        </p>
        <p>
          <strong>Fecha de actualización</strong>: Mayo de 2025
        </p>
      </>
    </ div>
  );
}
