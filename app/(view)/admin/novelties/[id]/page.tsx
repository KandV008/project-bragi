"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/app/ui/components/tags/sectionHeader";
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
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { actionDeleteBargain } from "@/db/bargain";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/Novelty";
import Image from "next/image";

export default function Page() {
  const pathname = usePathname();
  const noveltyId = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [novelty, setNovelty] = useState<NoveltyEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (noveltyId) {
      fetch(`${getNoveltyRoute}?id=${noveltyId}`)
        .then((response) => response.json())
        .then((data) => {
          setNovelty(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching novelty:", error));
    }
  }, [noveltyId]);

  if (isLoading) return <Loading />;
  if (!novelty) return <EmptyMessage />;

  return (
    <div
      className={`flex flex-col gap-3 
      ${componentText}`}
    >
      {/* Actions */}
      <>
        <FloatButton
          icon={faPencil}
          text={"Editar Novedad"}
          subtext={"Actualizar las atributos"}
          type={"warning"}
          position="center"
          navigationURL={`/admin/novelties/${noveltyId}/update`}
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
        <SectionHeader text={"Detalles de la novedad"} />
        {/* Promotional Image */}
        <div className="flex flex-col items-center sm:items-start gap-3 w-full">
          <Article label="Imagen Promocional" value={""} />
          <div className="flex flex-col w-2/3 place-self-center">
            <Image
            className="rounded"
              src={novelty.promotionalImage}
              alt={"imagen_promocional"}
              height={1500}
              width={1500}
            />
          </div>
        </div>
        {/* Data */}
        <div className="flex flex-row items-center sm:items-start gap-3">
          {/* Title */}
          <Article label="Título" value={novelty.title} />
          {/* Description */}
          <Article label="Descripción" value={novelty.description} />
        </div>
      </section>
      {/* Pop Up */}
      <article className="flex flex-center shrink-0 justify-center h-full w-full">
        {showModal && (
          <ConfirmationPopUp
            handleShowModal={handleShowModal}
            handleAction={() => {
              handleShowModal();
              actionDeleteBargain(noveltyId)
                .then((_) => toast.success("Se ha borrado la novedad."))
                .catch((_) =>
                  toast.error("No se ha podido borrar la novedad.")
                );
            }}
            message={"Borrar una novedad es una acción irreversible."}
          />
        )}
      </article>
    </div>
  );
}
