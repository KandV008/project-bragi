import ArticleHeader from "@/app/ui/components/tags/articleHeader/articleHeader";
import SectionHeader from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { Metadata } from "next";

export const dynamic = "force-static";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Aviso Legal",
};

export default function Page(): JSX.Element {
  return (
    <div className="text-justify flex flex-col gap-2">
      <SectionHeader
        text={"Condiciones generales"}
        id="condiciones-generales"
      />
      {/* ARTICLE 1 */}
      <>
        <ArticleHeader text={"1. Objeto"} id="1-objeto" />
        <p>
          Estas son las Condiciones Generales de contratación y uso (en
          adelante, las <strong>“Condiciones”</strong>) que regulan la puesta a
          disposición de la información suministrada a través del presente
          website (en adelante, el “Website”), su uso así como la relación
          contractual por la que el usuario adquiere los productos ofertados en
          la tienda on-line que <strong>AFORDA VISION S.L.</strong> (en
          adelante, <strong>“AUDIFONOS X MENOS”</strong>) pone a su disposición
          en la URL{" "}
          <a href="https://www.audifonosxmenos.com">
            https://www.audifonosxmenos.com
          </a>{" "}
          (en adelante, la <strong>“Tienda Online”</strong>).
        </p>
        <p>
          Las presentes <strong>Condiciones</strong> se refieren exclusivamente
          a personas físicas no comerciantes y han sido elaboradas de
          conformidad con lo establecido en la Ley 34/2002, de Servicios de la
          Sociedad de la Información y Comercio Electrónico (en adelante,{" "}
          <strong>“LSSI”</strong>
          ), el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que
          se aprueba el texto refundido de la Ley General para la Defensa de los
          Consumidores y Usuarios (en adelante, <strong>“LGCU”</strong>), la Ley
          7/1998 sobre Condiciones Generales de Contratación, la Ley 7/1996 de
          Ordenación del Comercio Minorista y cuantas disposiciones legales
          resulten de aplicación.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva la facultad de
          modificar, en cualquier momento y sin previo aviso, la estructura,
          configuración y diseño del <strong>Website</strong>, así como de las
          presentes <strong>Condiciones</strong>. Dichas modificaciones se
          reflejarán en el presente documento.
        </p>
        <p>
          Una versión actualizada de las presentes <strong>Condiciones</strong>{" "}
          estará disponible de forma permanente en el presente{" "}
          <strong>Website</strong>, al cual podrán acceder los usuarios en todo
          momento pudiendo almacenar este documento y obtener copia física del
          mismo mediante su impresión.
        </p>
      </>
      {/* ARTICLE 2 */}
      <>
        <ArticleHeader
          text={"2. Titularidad del Website"}
          id="2-titularidad-del-website"
        />
        <p>
          En cumplimiento de la <strong>LSSI</strong>, le informamos que{" "}
          <strong>AUDIFONOS X MENOS</strong> es una sociedad con domicilio
          social en la calle Gambo 2 bajo. Benidorm 03503 (Alicante) y con
          CIF B-54584552 que consta inscrita en el Registro Mercantil de
          Barcelona, Tomo 8892, Libro 8123, Folio 139, Hoja 104.143 y está
          debidamente legitimada para el uso y explotación del presente{" "}
          <strong>Website</strong>, cuya utilización está sujeta a las presentes{" "}
          <strong>Condiciones</strong>.
        </p>
      </>
      {/* ARTICLE 3 */}
      <>
        <ArticleHeader
          text={"3. Aceptación de las Condiciones"}
          id="3-aceptaci-n-de-las-condiciones"
        />
        <p>
          La navegación, así como el simple acceso al <strong>Website</strong> y
          la adquisición de cualquiera de los productos ofertados en la{" "}
          <strong>Tienda Online</strong>, atribuyen la condición de usuario de
          dicha página e implican la aceptación plena y sin reservas de las
          presentes <strong>Condiciones</strong>, así como de cualquier
          modificación introducida.
        </p>
        <p>
          La venta de productos de la <strong>Tienda Online</strong> está
          condicionada a la aceptación de las presentes{" "}
          <strong>Condiciones</strong>. Por lo tanto, el usuario que adquiera
          productos en la <strong>Tienda Online</strong> admite haber leído las
          presentes <strong>Condiciones</strong> y expresa su adhesión plena y
          sin reservas a todas y cada una de ellas.
        </p>
      </>{" "}
      {/* ARTICLE 4 */}
      <>
        <ArticleHeader text={"4. Capacidad legal"} id="4-capacidad-legal" />
        <p>
          Los servicios y contenidos ofrecidos a través del presente{" "}
          <strong>Website</strong> tienen como destinatarios únicamente a las
          personas físicas o jurídicas que, de conformidad con la legislación
          aplicable tengan la capacidad legal suficiente para la aceptación de
          las presentes <strong>Condiciones</strong> y que, asimismo, no hayan
          sido excluidos por <strong>AUDIFONOS X MENOS</strong> por contravenir
          alguna de las disposiciones de las presentes{" "}
          <strong>Condiciones</strong>.
        </p>
      </>
      {/* ARTICLE 5 */}
      <>
        <ArticleHeader
          text={"5. Propiedad intelectual e industrial"}
          id="5-propiedad-intelectual-e-industrial"
        />
        <p>
          Todos los derechos de propiedad industrial e intelectual así como toda
          la información contenida en el <strong>Website</strong> (imágenes,
          marcas , diseños gráficos, código fuente, diseño, estructura de
          navegación, bases de datos, y cualquier otro contenido que en la misma
          aparezca) son propiedad exclusiva de{" "}
          <strong>AUDIFONOS X MENOS</strong>.
        </p>
        <p>
          Mediante las presentes <strong>Condiciones</strong> no se cede ningún
          derecho de propiedad industrial o intelectual sobre los productos
          ofertados en la <strong>Tienda Online</strong>, sobre el{" "}
          <strong>Website</strong> ni sobre ninguno de sus elementos integrantes
          (imágenes, marcas , diseños gráficos, código fuente, diseño,
          estructura de navegación, bases de datos, y cualquier otro contenido
          que en la misma aparezca) quedando expresamente prohibidos al usuario
          la reproducción, transformación, distribución, comunicación pública,
          puesta a disposición, extracción, reutilización, reenvío o la
          utilización de cualquier naturaleza, por cualquier medio o
          procedimiento, de cualquiera de ellos, salvo en los casos que esté
          legalmente permitido o sea autorizado de forma expresa y por escrito
          por <strong>AUDIFONOS X MENOS</strong> y/o el titular de los
          correspondientes derechos. En virtud de la facultad de reserva
          prevista en la legislación vigente en materia de propiedad
          intelectual, AFORDA VISION S.L. se opone a que el presente Website y
          elementos integrantes de la misma protegidos por la ley de propiedad
          intelectual sean utilizados con fines de minería de textos y datos sin
          haber obtenido su consentimiento previo y por escrito.
        </p>
        <p>
          El usuario queda únicamente autorizado para visualizar y obtener una
          copia privada temporal de los contenidos para su exclusivo uso
          personal y privado en sus sistemas informáticos (software y hardware)
          sin poder ser posteriormente cedidos a terceros. Con las salvedades
          anteriores, el usuario no podrá modificar ni reproducir, ni en parte
          ni en su totalidad, esta información, sin el consentimiento expreso y
          por escrito de <strong>AUDIFONOS X MENOS</strong>. Con carácter
          enunciativo pero no limitativo:
        </p>
        <ol className="px-5">
          <li>
            1. El usuario no se encuentra autorizado para emplear la información
            contenida en el <strong>Website</strong> con la finalidad de
            desarrollar actividades de carácter comercial o profesional (venta
            directa o con cualquiera otra clase de finalidad comercial así como
            comercializar en cualquier modo dicha información).
          </li>
          <li>
            2. El usuario no se encuentra autorizado a suprimir, eludir,
            manipular el &quot;copyright&quot; y demás datos identificativos de
            los derechos de <strong>AUDIFONOS X MENOS</strong>, así como
            cualesquiera mecanismos de protección.
          </li>
          <li>
            3. El usuario no se encuentra autorizado para desmontar, descompilar
            o invertir las bases de datos en la que se almacena la información
            del <strong>Website</strong>.
          </li>
        </ol>
        <p>
          Toda la información del <strong>Website</strong> está protegida bajo
          los derechos de autor. La utilización no autorizada de la información
          contenida en este <strong>Website</strong>, su reventa, así como la
          lesión de los derechos de propiedad industrial e intelectual de{" "}
          <strong>AUDIFONOS X MENOS</strong>, dará lugar a las responsabilidades
          legalmente establecidas.
        </p>
        <p>
          Las marcas (signos distintivos y logos) que aparecen en el{" "}
          <strong>Website</strong> son titularidad exclusiva de{" "}
          <strong>AUDIFONOS X MENOS</strong> y están debidamente registrados o
          en proceso de registro . Las denominaciones de otros productos,
          servicios y compañías que aparezcan en este documento o en el{" "}
          <strong>Website</strong> pueden ser marcas u otros signos distintivos
          registrados por sus respectivos y legítimos propietarios.
        </p>
      </>{" "}
      {/* ARTICLE 6 */}
      <>
        <ArticleHeader
          text={"6. Política de enlaces"}
          id="6-pol-tica-de-enlaces"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong> no garantiza ni asume ningún tipo
          de responsabilidad por los daños y perjuicios sufridos por el acceso a
          contenidos de terceros a través de las posibles conexiones, vínculos o
          links de los sitios enlazados desde el <strong>Website</strong>. La
          función que, en su caso, podrían tener tales enlaces es exclusivamente
          la de informar a los usuarios sobre la existencia de otras fuentes de
          información u otros contenidos y servicios de Internet.{" "}
          <strong>AUDIFONOS X MENOS</strong> no será en ningún caso responsable
          del resultado obtenido a través de dichos enlaces o de las
          consecuencias que se deriven del acceso por los usuarios a los mismos.
          Estos contenidos de terceros son proporcionados por éstos, por lo que{" "}
          <strong>AUDIFONOS X MENOS</strong> no puede controlar la licitud de
          tales contenidos ni la calidad de los servicios ofrecidos en los
          mismos.
        </p>
      </>{" "}
      {/* ARTICLE 7 */}
      <>
        <ArticleHeader
          text={"7. Responsabilidad del usuario"}
          id="7-responsabilidad-del-usuario"
        />
        <p>
          Con carácter general el usuario se obliga al cumplimiento de las
          presentes <strong>Condiciones</strong>, así como a cumplir las
          especiales advertencias o instrucciones de uso contenidas en las
          mismas y obrar siempre conforme a la ley, a las buenas costumbres y a
          las exigencias de la buena fe, empleando la diligencia debida, y
          absteniéndose de utilizar el <strong>Website</strong> de cualquier
          forma que pueda impedir, dañar o deteriorar el normal funcionamiento
          del mismo, los bienes o derechos de <strong>AUDIFONOS X MENOS</strong>
          , sus proveedores, el resto de usuarios o en general de cualquier
          tercero.
        </p>
        <p>
          En particular, cuando el usuario acceda a la{" "}
          <strong>Tienda Online</strong> con el fin de adquirir los productos
          ofertados se compromete al estricto cumplimiento de las siguientes
          obligaciones:
        </p>
        <ol className="px-5">
          <li>
            1. El usuario comprobará, antes de efectuar la contratación a través
            de la <strong>Tienda Online</strong>, las características expuestas
            del producto, su precio, impuestos aplicables y funcionalidades.
            Mediante el envío del formulario de contratación correspondiente, el
            usuario acepta las <strong>Condiciones</strong> de registro y
            contratación aquí expuestas y se compromete a respetar el uso y las
            prohibiciones establecidas en las mismas. El usuario será
            absolutamente responsable de la utilización que haga del producto
            adquirido, exonerando a <strong>AUDIFONOS X MENOS</strong> de la
            responsabilidad derivada de cualquier daño que pudiera causar
            cualquier utilización correcta o incorrecta de ese producto.
          </li>
          <li>
            2. El hecho de que el usuario cumplimente el formulario no implica
            la aceptación automática de <strong>AUDIFONOS X MENOS</strong> de
            dicho encargo, sino que se entenderá que lo acepta cuando{" "}
            <strong>AUDIFONOS X MENOS</strong> le remita un correo electrónico
            de confirmación de la solicitud. Asimismo, al enviar el formulario
            de contratación, el usuario se compromete al pago correspondiente al
            producto adquirido.
          </li>
          <li>
            3. El producto se entregará únicamente a clientes finales. Cualquier
            uso comercial no autorizado de los mismos, o su reventa, queda
            expresamente prohibido, salvo autorización expresa de{" "}
            <strong>AUDIFONOS X MENOS</strong>.
          </li>
          <li>
            4. El usuario se compromete a posibilitar la entrega del pedido
            solicitado facilitando una dirección de entrega en la que pueda ser
            entregado dentro del horario habitual de entrega de mercancías. En
            caso de incumplimiento por parte del usuario comprador de esta
            obligación <strong>AUDIFONOS X MENOS</strong> no tendrá ninguna
            responsabilidad sobre el retraso o imposibilidad de entrega del
            pedido solicitado.
          </li>
        </ol>
        <p>
          Asimismo, y sin que ello implique restricción alguna de las anteriores
          obligaciones, durante la utilización del <strong>Website</strong> el
          usuario se obliga a:
        </p>
        <ol className="px-5">
          <li>
            1. Facilitar información veraz sobre los datos solicitados en el
            formulario de realización del pedido en la{" "}
            <strong>Tienda Online</strong>, y a mantenerlos actualizados.{" "}
            <strong>AUDIFONOS X MENOS</strong> se reserva la facultad, sin
            perjuicio de otras medidas legales a su disposición, de retirar,
            denegar o suspender el acceso al <strong>Website</strong> en caso de
            que los datos proporcionados sean o puedan ser falsos, inexactos o
            engañosos.
          </li>
          <li>
            2. No introducir, almacenar o difundir en o desde el{" "}
            <strong>Website</strong>, cualquier información o material que sea
            difamatorio, injurioso, obsceno, amenazador, xenófobo, incite a la
            violencia a la discriminación por razón de raza, sexo, ideología,
            religión o que de cualquier forma atente contra la moral, el orden
            público, los derechos fundamentales, las libertades públicas, el
            honor, la intimidad o la imagen de terceros y en general la
            normativa vigente.
          </li>
          <li>
            3. No introducir, almacenar o difundir mediante el{" "}
            <strong>Website</strong> ningún programa, datos, virus, código, o
            cualquier otro dispositivo electrónico o físico que sea susceptible
            de causar daños en el <strong>Website</strong>, en cualquiera de los
            servicios, o en cualquiera de los equipos, sistemas o redes de{" "}
            <strong>AUDIFONOS X MENOS</strong>, de cualquier otro usuario, de
            los proveedores de <strong>AUDIFONOS X MENOS</strong> o en general
            de cualquier tercero.
          </li>
          <li>
            4. No realizar actividades publicitarias o de explotación comercial
            a través del <strong>Website</strong>, y a no utilizar los
            contenidos y la información del mismo para remitir publicidad, o
            enviar mensajes con cualquier otro fin comercial, ni para recoger o
            almacenar datos personales de terceros.
          </li>
          <li>
            5. No utilizar identidades falsas, ni suplantar la identidad de
            otros en la utilización del <strong>Website</strong> o en la
            utilización de cualquiera de los servicios del mismo, incluyendo la
            utilización en su caso de contraseñas o claves de acceso de terceros
            o de cualquier otra forma.
          </li>
          <li>
            6. No destruir, alterar, inutilizar o dañar los datos,
            informaciones, programas o documentos electrónicos de{" "}
            <strong>AUDIFONOS X MENOS</strong>, sus proveedores o terceros.
          </li>
          <li>
            7. No introducir, almacenar o difundir mediante el{" "}
            <strong>Website</strong> cualquier contenido que infrinja derechos
            de propiedad industrial y/o intelectual o secretos empresariales de
            terceros, ni en general ningún contenido del cual no ostentara, de
            conformidad con la ley, el derecho a ponerlo a disposición de
            tercero.
          </li>
        </ol>
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva la facultad de excluir o
          no permitir la adquisición del producto a los usuarios que considere
          que infringen la normativa vigente, las presentes{" "}
          <strong>Condiciones</strong>, la moral, las costumbres generalmente
          aceptadas o el orden público, así como a cualquier otro usuario cuyo
          acceso sea considerado por <strong>AUDIFONOS X MENOS</strong>{" "}
          desaconsejable por razones derivadas de la propia imagen, reputación
          de la página web u otras. En este caso, si el pago se hubiera
          realizado, <strong>AUDIFONOS X MENOS</strong> procederá a su
          devolución al usuario.
        </p>
      </>
      {/* ARTICLE 8 */}
      <>
        <ArticleHeader
          text={"8. Responsabilidad de AUDIFONOS X MENOS"}
          id="8-responsabilidad-de-audifonos-x-menos"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong> se compromete a poner en la{" "}
          <strong>Tienda Online</strong>, a disposición del usuario, la
          información necesaria relativa a los productos que ofrece y las
          presentes <strong>Condiciones</strong> actualizadas.
        </p>
        <p>
          Los contenidos y servicios podrán evolucionar y{" "}
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a cambiar la
          marca, el logo, el nombre de dominio (URL), la presentación y
          cualesquiera elementos que considere oportunos en relación con sus
          productos. El usuario acepta que el acceso a la{" "}
          <strong>Tienda Online</strong>, el contenido y el servicio de dicho
          sitio es el existente en cada momento.{" "}
          <strong>AUDIFONOS X MENOS</strong> no aceptará reclamación alguna por
          los contenidos, servicios, actualizaciones, conexiones y/o cambios en
          general que afecten a sus productos.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> exige a sus proveedores el
          cumplimiento de normativa europea. En este sentido,{" "}
          <strong>AUDIFONOS X MENOS</strong> no se hace responsable de los daños
          personales y/o materiales derivados del uso del producto. Igualmente,{" "}
          <strong>AUDIFONOS X MENOS</strong> no se hace responsable de los daños
          personales o materiales que se produzcan como consecuencia de un
          defecto de fabricación o uso indebido del producto.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> podrá contratar o colaborar con
          subcontratistas o a terceras entidades, para llevar a cabo el
          suministro de la totalidad o parte de los productos a que se
          compromete en virtud de las diferentes operaciones que se vayan
          formalizando conforme a lo establecido en el presente documento.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> no responderá por el agotamiento
          del stock de ningún producto. En todo caso, la responsabilidad que
          pudiera serle exigible a <strong>AUDIFONOS X MENOS</strong> quedará
          limitada al precio del producto adquirido por el usuario.
        </p>
        <p>
          El usuario asume toda la responsabilidad derivada del uso del{" "}
          <strong>Website</strong>, siendo el único responsable de todo efecto
          directo o indirecto que se derive de dicho uso, incluyendo, de forma
          enunciativa y no limitativa, todo resultado económico, técnico y/o
          jurídico adverso, así como la defraudación de las expectativas
          generadas por el presente <strong>Website</strong>, obligándose el
          usuario a mantener indemne a <strong>AUDIFONOS X MENOS</strong> por
          cualesquiera reclamaciones de terceros derivadas, directa o
          indirectamente, de tales hechos.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> no se hace responsable de los
          perjuicios que se pudieran derivar de interferencias, omisiones,
          interrupciones, virus informáticos, averías y/o desconexiones en el
          funcionamiento operativo de este sistema electrónico o en los aparatos
          y equipos informáticos de los usuarios, motivadas por causas ajenas a{" "}
          <strong>AUDIFONOS X MENOS</strong>, que impidan o retrasen el acceso
          del usuario a la <strong>Tienda Online</strong> o la navegación por el{" "}
          <strong>Website</strong>, ni de los retrasos o bloqueos en el uso
          causados por deficiencias o sobrecargas de Internet o en otros
          sistemas electrónicos, ni de la imposibilidad de dar el servicio o
          permitir el acceso del usuario a la <strong>Tienda Online</strong> por
          causas no imputables a <strong>AUDIFONOS X MENOS</strong>, debidas al
          usuario, a terceros, o a supuestos de fuerza mayor.
        </p>
        <p>
          No obstante, <strong>AUDIFONOS X MENOS</strong> declara que ha
          adoptado y adoptará en su caso todas las medidas necesarias dentro de
          sus posibilidades y del estado de la tecnología, para garantizar el
          correcto funcionamiento del presente <strong>Website</strong> y evitar
          la existencia y transmisión de virus y demás componentes dañinos a los
          usuarios.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a interrumpir
          el acceso al <strong>Website</strong>, así como la prestación de los
          servicios ofrecidos a través del mismo en cualquier momento y sin
          previo aviso, ya sea por motivos técnicos, de seguridad, control,
          mantenimiento, por fallos de suministro eléctrico o por cualquier otra
          causa.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> no controla, con carácter general,
          la utilización que los usuarios hacen del <strong>Website</strong>. En
          particular <strong>AUDIFONOS X MENOS</strong> no garantiza bajo ningún
          extremo que los usuarios utilicen el <strong>Website</strong> de
          conformidad con la ley, las presentes <strong>Condiciones</strong>, la
          moral y buenas costumbres generalmente aceptadas y el orden público,
          ni tampoco que lo hagan de forma diligente y prudente. En
          consecuencia, <strong>AUDIFONOS X MENOS</strong> no se hace
          responsable por la utilización que el usuario realice del contenido
          del <strong>Website</strong> ni de sus contraseñas que pueda suponer
          una violación de cualquier tipo de norma, nacional o internacional, de
          los derechos de propiedad industrial e intelectual o cualesquiera
          otros derechos de terceros.
        </p>
      </>
      {/* ARTICLE 9 */}
      <>
        <ArticleHeader
          text={"9. Productos ofrecidos y precios"}
          id="9-productos-ofrecidos-y-precios"
        />
        <p>
          Los productos ofertados en la <strong>Tienda Online</strong>, junto
          con sus características, utilidades, imágenes y precio aparecerán en
          pantalla.
        </p>
        <p>
          Los precios de los productos relacionados en el{" "}
          <strong>Website</strong>, se incluirán y podrán ser consultados, en
          cualquier momento, a través de los catálogos y/o información recogida
          en el <strong>Website</strong> durante el proceso de compra de los
          mismos.
        </p>
        <p>
          Dichos precios indicados en pantalla figurarán en euros y serán los
          precios de venta al público por lo que incluirán los impuestos que
          sean de aplicación en cada momento. Las ofertas estarán debidamente
          indicadas en pantalla. <strong>AUDIFONOS X MENOS</strong> se reserva
          el derecho a elegir en cada momento los productos que se ofrezcan a
          los usuarios a través de la <strong>Tienda Online</strong>. Asimismo,{" "}
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a dejar de
          facilitar el acceso, en cualquier momento y sin previo aviso, de
          cualquiera de los productos ofrecidos en la{" "}
          <strong>Tienda Online</strong>.
        </p>
        <p>
          Los precios y ofertas presentados en el <strong>Website</strong> son
          válidos única y exclusivamente para pedidos on-line realizados a
          través de la <strong>Tienda Online</strong> en el{" "}
          <strong>Website</strong>.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> no estará obligada a suministrar el
          producto a un precio incorrecto si el error en el precio es obvio e
          inequívoco y hubiera podido ser reconocido de forma razonable por el
          usuario como precio incorrecto.{" "}
        </p>
        <p>
          En dicho supuesto, <strong>AUDIFONOS X MENOS</strong> procederá a
          comunicar al usuario dicha circunstancia tan pronto como ésta tuviera
          conocimiento y procederá, en su caso, al reembolso del precio abonado
          por el usuario.
        </p>
        <p>
          Los precios pueden cambiar en cualquier momento, pero (salvo en lo
          establecido anteriormente) los posibles cambios no afectarán a los
          pedidos respecto a los cuáles haya sido enviada la confirmación del
          pedido
        </p>
      </>
      {/* ARTICLE 10 */}
      <>
        <ArticleHeader
          text={"10. Realización del pedido"}
          id="10-realizaci-n-del-pedido"
        />
        <p>
          La realización de pedidos a través de la{" "}
          <strong>Tienda Online</strong> del <strong>Website</strong> únicamente
          se permite a usuarios con direcciones de entrega dentro de la Unión
          Europea (excluyendo para el territorio español, las Islas Canarias,
          Ceuta y Melilla).
        </p>
        <p>
          Para la adquisición de los productos en la Tienda,{" "}
          <strong>AUDIFONOS X MENOS</strong> solicitará al usuario que se
          registre, para lo cual el usuario deberá cumplimentar el formulario de
          registro a fin de que <strong>AUDIFONOS X MENOS</strong> le cree una
          cuenta de usuario que estará formada por la dirección de correo
          electrónico facilitada por el usuario como nombre de usuario y la
          contraseña que el usuario haya elegido, ambos datos necesarios para
          acceder a la <strong>Tienda Online</strong> y efectuar las compras. El
          nombre de usuario y la contraseña facilitados por{" "}
          <strong>AUDIFONOS X MENOS</strong> son elementos identificadores y
          tienen carácter personal, intransferible y modificable.
        </p>
        <p>
          Una vez registrado el usuario, y para proceder a la compra de
          productos, deberá seleccionar el/los producto/s que desea adquirir
          según las indicaciones recogidas en pantalla, seleccionar la dirección
          de envío del/de los producto/s seleccionado/s, la forma de envío entre
          las disponibles para el/los productos seleccionado/s (lo que puede
          implicar, según la forma de envío seleccionado, el cargo de los gastos
          de envío en cuyo caso aparecerán en la pantalla en el momento de
          seleccionar dicha forma de envío) y la forma de pago entre las
          permitidas en cada momento. Una vez cumplimentado a estos efectos el
          formulario de pedido deberá validarlo, mediante la aceptación de las
          presentes <strong>Condiciones</strong>. Su aceptación supone la
          lectura y aceptación irrevocable de todas y cada una de las presentes{" "}
          <strong>Condiciones</strong>, que es el documento por el que se regirá
          el contrato de compraventa celebrado entre{" "}
          <strong>AUDIFONOS X MENOS</strong> y el usuario como parte de la
          celebración del mismo. De disponer el usuario algún código
          promocional, podrá introducirlo en el apartado habilitado a tal efecto
          antes de realizar el pedido. De la misma forma, en el supuesto de
          querer realizar algún comentario específico sobre el pedido, lo podrá
          hacer antes de validar el pedido mediante la cumplimentación del
          apartado del formulario de pedido habilitado a tal efecto.{" "}
        </p>
        <p>
          Salvo prueba en contrario, los datos registrados por{" "}
          <strong>AUDIFONOS X MENOS</strong> constituyen la prueba del conjunto
          de transacciones realizadas entre <strong>AUDIFONOS X MENOS</strong> y
          los usuarios. <strong>AUDIFONOS X MENOS</strong> archivará el
          documento electrónico en que se formalice el pedido y éste será
          accesible.
        </p>
        <p>
          Una vez efectuada la compra, y en el plazo más breve posible,{" "}
          <strong>AUDIFONOS X MENOS</strong> remitirá por e-mail al usuario una
          confirmación del pedido. La confirmación del pedido no tendrá validez
          como factura. Los precios de compra serán los vigentes en el momento
          en que se realiza el pedido.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> dará curso a todos los pedidos que
          se realicen sujetándose exclusivamente a lo dispuesto en las presentes{" "}
          <strong>Condiciones</strong>. En cualquier caso,{" "}
          <strong>AUDIFONOS X MENOS</strong> no se hace responsable de las
          deficiencias del servicio de su centro servidor, ni de las redes de
          comunicación, ni de los problemas resultantes del mal funcionamiento o
          uso de versiones no optimizadas de los navegadores.
        </p>
        <p>
          En ningún caso podrá modificarse un pedido, una vez solicitado por el
          usuario, sin el consentimiento por escrito de{" "}
          <strong>AUDIFONOS X MENOS</strong>. Cualquier modificación propuesta
          por el usuario y aceptada por <strong>AUDIFONOS X MENOS</strong> podrá
          estar sujeta a cargos por modificación o posibles variaciones en el
          precio, las especificaciones o el plazo de entrega de los productos,
          según determine <strong>AUDIFONOS X MENOS</strong> en base a su
          criterio exclusivo, y de acuerdo con la normativa vigente, siendo
          dicha decisión vinculante para el usuario comprador una vez se le haya
          comunicado.
        </p>
      </>
      {/* ARTICLE 11 */}
      <>
        <ArticleHeader text={"11. Pago"} id="11-pago" />
        <p>
          El pago del precio de los productos comprados en la{" "}
          <strong>Tienda Online</strong> y de los gastos de envío que aparezcan
          en pantalla (en el supuesto de tener que soportarlos el usuario según
          el precio total de los productos, el país de entrega de los mismos y
          la forma de envío seleccionada), se podrá realizar mediante los medios
          de pago que en cada momento se señalen en pantalla.{" "}
        </p>
        <p>
          Para proceder al pago, el usuario deberá seguir todas y cada una de
          las instrucciones que aparecen en pantalla en función de la modalidad
          de pago elegida.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> tiene instalada una pasarela de
          pago de comercio electrónico. Todos los datos proporcionados a estos
          efectos serán encriptados para garantizar la máxima seguridad de los
          mismos. Con el fin de garantizar la mayor seguridad a los usuarios,{" "}
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho de solicitar
          los documentos correspondientes a la identidad y medio de pago del
          usuario, previo a la entrega del pedido.
        </p>
        <p>
          Las tarjetas de crédito están sujetas a comprobaciones y
          autorizaciones por parte de la entidad emisora de las mismas, pero si
          dicha entidad no autorizase el pago,{" "}
          <strong>AUDIFONOS X MENOS</strong> no responderá de ningún retraso o
          falta de entrega y no podrá formalizar la compraventa con el usuario.
        </p>
      </>
      {/* ARTICLE 12 */}
      <>
        <ArticleHeader
          text={"12. Disponibilidad de los productos"}
          id="12-disponibilidad-de-los-productos"
        />
        <p>
          Todos los pedidos de productos están sujetos a la disponibilidad de
          los mismos y, en este sentido, si se producen dificultades en cuanto a
          su suministro, o si no hubiera disponibilidad en stock,{" "}
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho de facilitar
          información al usuario acerca de productos sustitutivos de calidad y
          valor igual o superior que el usuario podrá encargar. Si el usuario no
          deseara realizar un nuevo pedido de los productos ofrecidos en
          sustitución, <strong>AUDIFONOS X MENOS</strong> procederá a reembolsar
          la cantidad abonada por el usuario en un plazo no superior a catorce
          (14) días.
        </p>
      </>
      {/* ARTICLE 13 */}
      <>
        <ArticleHeader text={"13. Entrega"} id="13-entrega" />
        <p>
          Sin perjuicio de lo establecido respecto a la disponibilidad de stock, 
          y salvo que se produzcan circunstancias extraordinarias, 
          <strong>AUDIFONOS X MENOS</strong> procederá a preparar y a enviar los 
          productos adquiridos en la <strong>Tienda Online</strong> y 
          relacionados en la confirmación del pedido, a la dirección indicada por 
          el usuario o en la tienda física de <strong>AUDIFONOS X MENOS</strong> 
          indicada en el momento de realizar el pedido (en caso de haber 
          seleccionado dicha opción). Dicha entrega  se realizará (según la forma 
          de envío seleccionada) dentro del plazo indicado en el momento de la 
          realización del pedido. Si el pedido es inferior a 40 euros, se le 
          cobrará al cliente 3,99 euros de gastos de envío. Si el pedido es igual 
          o superior a 40 euros, los gastos de envío serán de 0 euros.
        </p>
        <p>
          Como se indica en dicho apartado, como norma general, los sábados, 
          domingos y festivos no se realizan entregas, por lo que dichos días, no 
          computan a efectos del plazo de preparación ni de entrega de los 
          pedidos realizados a través de la <strong>Tienda Online</strong>. No 
          obstante, el usuario sí puede pasar a recoger en fin de semana y 
          dentro del horario de apertura de la tienda física de 
          <strong>INTERVISION EXPERT BENIDORM</strong> solo en el caso de haber 
          seleccionado en el momento de la compra dicha modalidad de recogida 
          del pedido. El envío se realizará entre 5 y 7 días laborales.
        </p>
        <p>
          A efectos de las presentes <strong>Condiciones</strong>, se entenderá 
          que se ha producido la entrega en el momento en que el usuario o un 
          tercero en su nombre firme la recepción de los productos en la 
          dirección de entrega convenida.
        </p>
      </>
      {/* ARTICLE 14 */}
      <>
        <ArticleHeader
          text={"14. Cambios y devoluciones"}
          id="14-cambios-y-devoluciones"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong>, con su objetivo de dar un servicio
          de calidad y óptimo a sus usuarios, puede ofrecer a sus usuarios para
          algunos productos la posibilidad de cambiar y/o devolver los productos
          comprados a través de la <strong>Tienda Online</strong>. El usuario
          puede consultar en cualquier momento la política de cambios y
          devoluciones establecida por <strong>AUDIFONOS X MENOS</strong> en el
          apartado Devoluciones del <strong>Website</strong>.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a modificar
          en cualquier momento la política de cambios y devoluciones, si bien
          únicamente la aplicará para pedidos realizados a partir de su
          modificación y respetará la política de cambios y devoluciones
          anterior para aquellos pedidos que se hubieran realizado con
          anterioridad a su fecha de modificación.
        </p>
      </>
      {/* ARTICLE 14.1 */}
      <>
        <ArticleHeader
          text={"14.1. Derecho de desistimiento"}
          id="14-1-derecho-de-desistimiento"
        />
        <p>
          Sin perjuicio de la política de cambios y devoluciones indicada en el
          apartado anterior que <strong>AUDIFONOS X MENOS</strong> puede ofrecer
          en cualquier momento, <strong>AUDIFONOS X MENOS</strong> informa al
          usuario que, de conformidad con la legislación vigente, dispone de un
          plazo de catorce (14) días naturales para desistir del producto sin
          necesidad de justificación a partir de la fecha de recepción del
          pedido o recogida del pedido, en el supuesto de haberlo recogido en la
          tienda física de <strong>INTERVISION EXPERT BENIDORM</strong>. Para
          efectuar dicho desistimiento, el usuario podrá optar entre la
          devolución del producto en la tienda física de{" "}
          <strong>INTERVISION EXPERT BENIDORM</strong> o mediante la
          comunicación del desistimiento a <strong>AUDIFONOS X MENOS</strong> a
          través del envío de un correo electrónico a la dirección{" "}
          <a href="contact@audifonosxmenos.com">contact@audifonosxmenos.com</a>
        </p>
        <p>
          Adviértase que en el supuesto de haber optado el usuario por la
          entrega del pedido en una tienda física de{" "}
          <strong>AUDIFONOS X MENOS</strong> y optar el usuario por la recogida
          del pedido en su domicilio por un mensajero puesto a disposición por{" "}
          <strong>AUDIFONOS X MENOS</strong>, el usuario correrá con los costes
          de su devolución de los que será informado con carácter previo. Del
          mismo modo, correrá el usuario con el coste de su devolución para
          entregas que se hayan realizado fuera del territorio español y
          portugués, debiendo en dicho caso el usuario devolver los productos a
          través de sus propios medios o mediante la contratación de cualquier
          servicio de transporte.
        </p>
        <p>
          El/los artículos objeto de devolución deberá/n devolverse
          correctamente protegido/s, en su <strong>embalaje de origen</strong>,{" "}
          <strong>intacto/s</strong>, <strong>en perfecto estado</strong>,{" "}
          <strong>con todos los accesorios</strong>, y <strong>factura</strong>.
          De no cumplir los anteriores requisitos,{" "}
          <strong>AUDIFONOS X MENOS</strong> podrá denegar su devolución.{" "}
        </p>
        <p>
          Ejercitado por el comprador el desistimiento de/de los producto/s,{" "}
          <strong>AUDIFONOS X MENOS</strong> reembolsará las cantidades
          recibidas mediante abono en la misma forma en que fue abonado el/los
          mismo/s en un plazo no superior a catorce (14) días naturales. No
          obstante lo anterior, <strong>AUDIFONOS X MENOS</strong> podrá retener
          dicho reembolso hasta recibir el/los artículo/s devuelto/s.
        </p>
        <p>
          Adicionalmente, téngase en cuenta que de acuerdo con la{" "}
          <strong>LGCU</strong>, existen determinados productos respecto de los
          cuales no existe derecho de desistimiento (bienes confeccionados
          conforme a las especificaciones del consumidor o claramente
          personalizados así como aquellos que no sean aptos para ser devueltos
          por razones de protección de la salud o de higiene y que hayan sido
          desprecintados tras la entrega, tales como las lentillas o el líquido
          para la mismas) por parte del usuario, por lo que no se aceptará el
          desistimiento en dichos supuestos.
        </p>
      </>
      {/* ARTICLE 15 */}
      <>
        <ArticleHeader
          text={"15. Garantía de los productos"}
          id="15-garant-a-de-los-productos"
        />
        <p>
          Todos los productos ofertados y comercializados a través del{" "}
          <strong>Website</strong> cuentan con la garantía legalmente
          establecida ofrecida por <strong>AUDIFONOS X MENOS</strong> que
          protegen al usuario frente a faltas de conformidad que se manifiesten
          en un plazo de tres (3) años a contar desde su fecha de entrega, si
          bien en la misma no se incluyen desperfectos producidos por
          negligencias, golpes, uso incorrecto o manipulaciones indebidas
          imputables al usuario así como por desgaste habitual. Cualquier
          defecto o presunta no conformidad con el producto deberá notificarse
          por escrito a <strong>AUDIFONOS X MENOS</strong> a través de
          cualquiera de los medios de contacto establecidos a tal efecto en el
          apartado <a href="contact@audifonosxmenos.com">Contacto</a> del{" "}
          <strong>Website</strong>, incluyendo todos los detalles en la
          reclamación, a efectos de proceder a aplicar medidas correctoras de
          carácter gratuito como su sustitución o reparación (según el caso).
        </p>
        <p>
          En caso que el producto comprado por el usuario no llegara en buenas
          condiciones o con desperfectos, éste deberá contactar con{" "}
          <strong>AUDIFONOS X MENOS</strong> a través de la dirección de correo
          electrónico{" "}
          <a href="contact@audifonosxmenos.com">contact@audifonosxmenos.com</a>{" "}
          en un plazo no superior a cuarenta y ocho (48) horas desde la
          recepción del producto, para que <strong>AUDIFONOS X MENOS</strong>{" "}
          gestione su sustitución (o en su caso, a su reparación), la recogida
          del producto que ha llegado en mal estado y la reclamación a la
          empresa de transporte.
        </p>
      </>
      {/* ARTICLE 15.1 */}
      <>
        <ArticleHeader
          text={"15.1 Garantías comerciales"}
          id="15-1-garant-as-comerciales"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong>, con su objetivo de dar un servicio
          de calidad y óptimo a sus usuarios, puede ofrecer a sus usuarios para
          algunos productos una garantía comercial adicional a la garantía legal
          y medidas correctoras gratuitas indicadas en el párrafo anterior. El
          usuario puede consultar en cualquier momento las garantías comerciales
          adicionales establecidas por <strong>AUDIFONOS X MENOS</strong> en
          cada momento a través del apartado <a href="???">Garantías</a> del{" "}
          <strong>Website</strong>.
        </p>
        <p>
          Las garantías comerciales, de ofrecerse y salvo indicación en
          contrario, son ofrecidas por <strong>AUDIFONOS X MENOS</strong> y
          deberán ser ejecutadas por el usuario a través de la dirección de
          correo electrónico{" "}
          <a href="contact@audifonosxmenos.com">contact@audifonosxmenos.com</a>,
          salvo que se hubiera realizado la entrega del producto en nuestra
          tienda en cuyo caso deberá ejecutarse en la tienda en la que se
          efectuó la entrega.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a modificar
          en cualquier momento la política de garantías comerciales adicionales
          ofrecidas, si bien únicamente la aplicará para pedidos realizados a
          partir de su modificación y respetará la política de garantías
          comerciales adicionales anterior para aquellos pedidos que se hubieran
          realizado con anterioridad a su fecha de modificación.
        </p>
      </>
      {/* ARTICLE 16 */}
      <>
        <ArticleHeader
          text={"16. Resolución del contrato"}
          id="16-resoluci-n-del-contrato"
        />
        <p>
          <strong>AUDIFONOS X MENOS</strong> se reserva el derecho a retirar de
          forma inmediata el acceso al servicio y a la{" "}
          <strong>Tienda Online</strong> a aquellos usuarios que a criterio de{" "}
          <strong>AUDIFONOS X MENOS</strong> contravengan lo dispuesto en las
          presentes Condiciones, sin posibilidad de reembolso en caso de haberse
          efectuado el pago.
        </p>
        <p>
          Concretamente, <strong>AUDIFONOS X MENOS</strong> podrá resolver el
          contrato en los siguientes supuestos:
        </p>
        <ol className="px-5">
          <li>
            1. Cuando el acceso se utilice con fines ilegítimos, incluyendo por
            tales los enumerados en las presente <strong>Condiciones</strong>.
          </li>
          <li>
            2. Cuando los datos de cobro proporcionados en la contratación sean
            erróneos o imposibiliten la facturación y/o cobro del producto.
          </li>
          <li>
            3. En caso de usos fraudulentos del producto o contrarios a la buena
            fe.
          </li>
        </ol>
      </>
      {/* ARTICLE 17 */}
      <>
        <ArticleHeader text={"17. Cookies"} id="17-cookies" />
        <p>
          En relación con las cookies que utiliza el <strong>Website</strong>{" "}
          será aplicable lo establecido en la Política de Cookies del{" "}
          <strong>Website</strong> que puede ser consultado en{" "}
          <a href="https://audifonosxmenos.com/policies/cookies">
            https://audifonosxmenos.com/policies/cookies
          </a>
        </p>
      </>
      {/* ARTICLE 18 */}
      <>
        <ArticleHeader text={"18. Notificaciones"} id="18-notificaciones" />
        <p>
          La normativa aplicable exige que parte de la información y/o
          comunicaciones enviadas a los usuarios sean por escrito. Al usar este
          sitio <strong>Website</strong>, el usuario acepta que la mayor parte
          de las comunicaciones con <strong>AUDIFONOS X MENOS</strong> sean
          electrónicas. <strong>AUDIFONOS X MENOS</strong> contactará con los
          usuarios por correo electrónico. El usuario consiente en usar este
          medio electrónico de comunicación y reconoce que todo contrato,
          notificación, información y demás comunicaciones que sean enviadas por{" "}
          <strong>AUDIFONOS X MENOS</strong> de forma electrónica cumplen con el
          requisito legal de ser por escrito.
        </p>
        <p>
          Los usuarios deberán enviar las comunicaciones y/o notificaciones a{" "}
          <strong>AUDIFONOS X MENOS</strong> preferiblemente a través del medio
          de contacto indicado en el apartado “CONTACTO” del{" "}
          <strong>Website</strong>. De conformidad con el apartado anterior, y
          salvo que se estipule lo contrario, <strong>AUDIFONOS X MENOS</strong>{" "}
          podrá enviar las comunicaciones vía e-mail.
        </p>
      </>
      {/* ARTICLE 19 */}
      <>
        <ArticleHeader text={"19. Renuncia"} id="19-renuncia" />
        <p>
          En caso de que <strong>AUDIFONOS X MENOS</strong> dejara de insistir
          en el cumplimiento estricto por parte del usuario de alguna de las
          obligaciones asumidas en virtud de las presentes{" "}
          <strong>Condiciones</strong>, o si dejara de ejercitar alguno de los
          derechos o recursos que <strong>AUDIFONOS X MENOS</strong> estuviera
          facultada a ejercitar o interponer en virtud de estas{" "}
          <strong>Condiciones</strong>, tal hecho no constituirá una renuncia a
          dichos derechos o recursos ni exonerará al usuario de cumplir con
          tales obligaciones.
        </p>
        <p>
          Las renuncias a exigir el cumplimiento que pudiera realizar{" "}
          <strong>AUDIFONOS X MENOS</strong> no constituirán una renuncia a
          exigir cumplimientos posteriores.
        </p>
        <p>
          Ninguna renuncia por parte de <strong>AUDIFONOS X MENOS</strong> de
          las presentes <strong>Condiciones</strong> surtirá efecto, a no ser
          que se estipule de forma expresa que es una renuncia y se le comunique
          al usuario por escrito de conformidad con lo dispuesto en el apartado
          de Notificaciones anterior.
        </p>
      </>
      {/* ARTICLE 20 */}
      <>
        <ArticleHeader text={"20. Independencia"} id="20-independencia" />
        <p>
          Toda cláusula o estipulación de las presentes{" "}
          <strong>Condiciones</strong> que resulte inválida, nula o ilegal no
          afectará, perjudicará ni invalidará, siempre que no fuera esencial
          para el cumplimiento del objeto de las mismas, cualesquiera otras{" "}
          <strong>Condiciones</strong> o disposiciones aquí contenidas, las
          cuales permanecerán vigentes y efectivas.
        </p>
      </>
      {/* ARTICLE 21 */}
      <>
        <ArticleHeader
          text={"21. Integridad del contrato"}
          id="21-integridad-del-contrato"
        />
        <p>
          El documento de contrato entre el usuario y{" "}
          <strong>AUDIFONOS X MENOS</strong> está compuesto por las presentes{" "}
          <strong>Condiciones</strong>, el formulario enviado por el usuario con
          sus datos personales y de pago y los datos ubicados en la Tie
          <strong>nda Online</strong>, que completan el presente documento,
          prevaleciendo frente a cualquier otro acuerdo verbal o escrito previo
          o simultáneo.
        </p>
      </>
      {/* ARTICLE 21 */}
      <>
        <ArticleHeader
          text={"22. Ley aplicable y jurisdicción"}
          id="22-ley-aplicable-y-jurisdicci-n"
        />

        <p>
          La validez, ejecución e interpretación de las presentes{" "}
          <strong>Condiciones</strong> así como las compraventas realizadas a
          través de la <strong>Tienda Online</strong> serán reguladas en todos
          sus aspectos por las leyes civiles y mercantiles españolas.
        </p>
        <p>
          <strong>AUDIFONOS X MENOS</strong> y el usuario se comprometen a
          intentar resolver de manera amistosa cualquier desacuerdo que pudiera
          surgir en el desarrollo de la relación contractual, previamente a
          acudir a la jurisdicción competente. En este sentido y con el objetivo
          de intentar resolver de manera amistosa cualquier controversia que
          pudiera surgir, el usuario se compromete a contactar con el
          departamento de atención al cliente de{" "}
          <strong>AUDIFONOS X MENOS</strong> a través de los siguientes medios:
          AFORDA VISION S.L. Departamento de Atención al Cliente, calle Gambo 2 bajo. Benidorm 03503 (Alicante) o bien mediante el envío de un
          correo electrónico a la dirección{" "}
          <a href="contact@audifonosxmenos.com">contact@audifonosxmenos.com</a>,
          antes de presentar una reclamación ante cualquier autoridad
          administrativa o judicial.
        </p>
        <p>
          Asimismo, en virtud de lo dispuesto en el Reglamento (UE) nº 524/2013
          del Parlamento Europeo y del Consejo, de 21 de mayo de 2013, relativo
          a la resolución de litigios en línea en materia de consumo,{" "}
          <strong>AUDIFONOS X MENOS</strong> le informa que, en caso de
          controversia, el usuario residente de la Unión Europea podrá acudir a
          la “Plataforma Online de Resolución de Conflictos” que ha desarrollado
          la Comisión Europea, con el fin de intentar resolver
          extrajudicialmente cualquier controversia que se derive de la
          compraventa de los productos ofertados por{" "}
          <strong>AUDIFONOS X MENOS</strong>. Puede acceder a la “Plataforma
          Online de Resolución de Conflictos” a través del siguiente enlace:{" "}
          <a href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          En el supuesto de que surja cualquier conflicto, litigio,
          discrepancia, cuestión o reclamación resultantes de la ejecución,
          interpretación y/o aplicación de las presentes{" "}
          <strong>Condiciones</strong> y/o utilización del{" "}
          <strong>Website</strong> que no haya podido resolverse de forma
          amistosa entre las partes, se resolverá definitivamente en los
          Juzgados y Tribunales de la ciudad de Benidorm, salvo que mediante
          norma imperativa se establezca otro fuero distinto. En este sentido,
          indicar que, de tener el usuario la condición de consumidor (i.e. ser
          una persona física o jurídica que actúa en un ámbito ajeno a una
          actividad empresarial o profesional), la anterior sumisión no será
          aplicable, siendo competentes los juzgados y tribunales del domicilio
          del usuario.
        </p>
      </>
    </ div>
  );
}
