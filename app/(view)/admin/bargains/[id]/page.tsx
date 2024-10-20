"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
import { actionDeleteBargain, actionDeleteProduct } from "@/db/action";
import Loading from "./loading";
import { Article } from "@/app/ui/components/tags/article";
import ConfirmationPopUp from "@/app/ui/components/popUps/confirmationPopUp";
import toast from "react-hot-toast";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import {
  componentBackground,
  componentBorder,
  componentText,
} from "@/app/ui/tailwindClasses";
import { BargainEntity } from "@/app/model/entities/Bargain";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";

export default function Page() {
  const pathname = usePathname();
  const bargainCode = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [bargain, setBargain] = useState<BargainEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (bargainCode) {
      fetch(`/api/getBargain?code=${bargainCode}`)
        .then((response) => response.json())
        .then((data) => {
          setBargain(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [bargainCode]);

  if (isLoading) return <Loading />;
  if (!bargain) return <EmptyMessage />;

  return (
    <div
      className={`flex flex-col gap-3 
      ${componentText}`}
    >
      {/* Actions */}
      <>
        <FloatButton
          icon={faPencil}
          text={"Editar Oferta"}
          subtext={"Actualizar las atributos"}
          type={"warning"}
          position="center"
          navigationURL={`/admin/products/${bargainCode}/update`}
        />
        <FloatButton
          icon={faEraser}
          text={"Borrar Oferta"}
          subtext={"Eliminar para siempre"}
          type={"danger"}
          position="end"
          onClick={handleShowModal}
        />
        <GoBackButton />
      </>
      {/* Display */}
      <section
        className={`flex flex-col items-center sm:items-start gap-3 p-2 md:p-10
          ${componentBackground}
          ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Detalles del producto"} />
        {/* Basic Data */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-3">
          {/* Code */}
          <Article label="Código" value={bargain.code} />
          {/* Title */}
          <Article label="Título" value={bargain.title} />
        </div>
        {/* Description */}
        <Article label="Descripción" value={bargain.description} />
      </section>
      {/* Pop Up */}
      <article className="flex flex-center shrink-0 justify-center h-full w-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={() => {
              handleShowModal();
              actionDeleteBargain(bargainCode)
                .then((_) => toast.success("Se ha borrado la oferta."))
                .catch((_) =>
                  toast.error("No se ha podido borrar la oferta.")
                );
            }}
            message={"Borrar una oferta es una acción irreversible."}
          />
        )}
      </article>
    </div>
  );
}
