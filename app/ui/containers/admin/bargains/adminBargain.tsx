"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import SectionHeader, { SectionHeaderSkeleton } from "@/app/ui/components/tags/sectionHeader";
import { Article, ArticleSkeleton } from "@/app/ui/components/tags/article";
import ConfirmationPopUp from "@/app/ui/components/popUps/confirmationPopUp";
import toast from "react-hot-toast";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import FloatButton from "@/app/ui/components/buttons/floatButton";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import { BargainEntity } from "@/app/model/entities/Bargain";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { actionDeleteBargain } from "@/db/bargain";
import { getBargainRoute } from "@/app/api/routes";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput";

export default function AdminBargain() {
  const pathname = usePathname();
  const bargainId = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [bargain, setBargain] = useState<BargainEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (bargainId) {
      fetch(`${getBargainRoute}?id=${bargainId}`)
        .then((response) => response.json())
        .then((data) => {
          setBargain(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching bargain:", error));
    }
  }, [bargainId]);

  if (isLoading) return <AdminBargainSkeleton />;
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
          navigationURL={`/admin/bargains/${bargainId}/update`}
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
        <SectionHeader text={"Detalles de la oferta"} />
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
              actionDeleteBargain(bargainId)
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

export function AdminBargainSkeleton() {
    return (
      <div
        className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}
      >
        {/* Display */}
        <section className="flex flex-col gap-3 p-10 bg-gray-100">
          <SectionHeaderSkeleton />
          {/* Basic Data */}
          <div className="grid grid-cols-2 gap-3">
            {/* Name */}
            <ArticleSkeleton />
            {/* Category */}
            <ArticleSkeleton />
          </div>
          {/* Description */}
          <TextAreaInputSkeleton />
        </section>
      </div>
    );
  }
