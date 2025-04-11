"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader";
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
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import Image from "next/image";
import { BigImageSkeleton } from "@/app/ui/components/images/bigImage";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput";
import { actionDeleteNovelty } from "@/db/novelty/novelty";

/**
 * This component displays the details of a novelty (news item) and provides options for editing or deleting it.
 * 
 * @returns {JSX.Element} The AdminNovelty component.
 */
export default function AdminNovelty(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const noveltyId = pathname.split("/").pop();
  const [showModal, setShowModal] = useState(false);
  
  /**
   * Toggles the confirmation popup modal.
   */
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

  if (isLoading) return <AdminNoveltySkeleton />;
  if (!novelty) return <EmptyMessage />;

  return (
    <div className={`flex flex-col gap-3 ${componentText}`}>
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
        <GoBackButton link="/admin/novelties" />
      </>
      {/* Display */}
      <section
        className={`flex flex-col items-center sm:items-start gap-3 p-2 md:p-10 ${componentBackground} ${componentBorder} rounded-xl`}
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
          <Article label="Título" value={novelty.title} />
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
              actionDeleteNovelty(noveltyId)
                .then((_) => {
                  toast.success("Se ha borrado la novedad.");
                  router.push("/admin/novelties");
                })
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

/**
 * AdminNoveltySkeleton Component
 * 
 * This component displays a loading skeleton while novelty data is being fetched.
 * 
 * @returns {JSX.Element} The AdminNoveltySkeleton component.
 */
export function AdminNoveltySkeleton(): JSX.Element {
  return (
    <div className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}>
      {/* Display */}
      <section className="flex flex-col gap-3 p-10 bg-gray-100">
        <SectionHeaderSkeleton />
        {/* Promotional Image */}
        <div className="flex flex-col items-center sm:items-start gap-3 w-full">
          <div className="flex flex-col w-2/3 place-self-center">
            <BigImageSkeleton />
          </div>
        </div>
        {/* Data */}
        <div className="grid grid-cols-2 gap-3">
          <ArticleSkeleton />
          <TextAreaInputSkeleton />
        </div>
      </section>
    </div>
  );
}