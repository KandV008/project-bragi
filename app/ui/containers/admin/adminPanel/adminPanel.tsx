"use client";

import { faEraser, faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  componentBorder,
  componentBackground,
  componentText,
} from "@/app/ui/tailwindClasses";
import GoBackButton from "@/app/ui/components/buttons/goBackButton/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton/floatButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationPopUp from "@/app/ui/components/popUps/confirmationPopUp/confirmationPopUp";
import { actionDeleteProduct } from "@/db/product/product";
import toast from "react-hot-toast";

interface AdminPanelProps {
  entity: "product" | "novelty" | "bargain";
  context: "ALL" | "READ" | "CREATE" | "UPDATE";
  extras: { entityId?: string; url?: string };
}

/**
 * This component serves as the main dashboard for administrators, providing navigation
 * options to manage different sections of the application, such as products, offers,
 * and news. It also allows users to exit back to their profile.
 *
 * @returns {JSX.Element} The rendered Admin Dashboard component.
 */
export default function AdminPanel({
  entity,
  context,
  extras,
}: AdminPanelProps): JSX.Element {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const entityRoutes = {
  product: "products",
  novelty: "novelties",
  bargain: "bargains",
} as const;

const entityRoute = entityRoutes[entity];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <section
        className={`flex flex-col p-3 sm:p-5 items-center gap-2 sm:gap-3 rounded-xl w-fit
          ${componentBorder} ${componentBackground} ${componentText}`}
      >
        {/* Action Buttons */}
        {context === "ALL" || context === "READ" ? (
          <>
            {/* Create Entity */}
            <FloatButton
              icon={faPlus}
              text={"Crear Entidad"}
              subtext={"Añadir un nueva entidad"}
              type={"default"}
              position="end"
              navigationURL={`/admin/${entityRoute}/create`}
            />
          </>
        ) : (
          <></>
        )}
        {extras.entityId ? (
          <>
            {/* Update Entity */}
            <FloatButton
              icon={faPencil}
              text={"Editar Entidad"}
              subtext={"Actualizar los atributos"}
              type={"warning"}
              position="center"
              navigationURL={`/admin/${entityRoute}/${extras.entityId}/update`}
            />
            {/* Delete Entity */}
            <FloatButton
              icon={faEraser}
              text={"Borrar Entidad"}
              subtext={"Eliminar para siempre"}
              type={"danger"}
              position="end"
              onClick={handleShowModal}
            />
          </>
        ) : (
          <></>
        )}
        {/* Go Back */}
        {extras.url ? <GoBackButton link={extras.url} /> : <GoBackButton />}
      </section>
      {/* Pop Up */}
      <article className="flex flex-center shrink-0 justify-center h-full w-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={() => {
              handleShowModal();
              actionDeleteProduct(extras.entityId)
                .then((_) => {
                  toast.success("Se ha borrado la entidad.");
                  router.push(`/admin/${entityRoute}`);
                })
                .catch((_) =>
                  toast.error("No se ha podido borrar la entidad.")
                );
            }}
            message={"Borrar una entidad es una acción irreversible."}
          />
        )}
      </article>
    </div>
  );
}
