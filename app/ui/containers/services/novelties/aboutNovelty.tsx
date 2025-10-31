"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Article,
  ArticleSkeleton,
} from "@/app/ui/components/tags/article/article";
import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "@/app/ui/tailwindClasses";
import { getNoveltyRoute } from "@/app/api/routes";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import Image from "next/image";
import { BigImageSkeleton } from "@/app/ui/components/images/bigImage/bigImage";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import AdminPanel from "../../admin/adminPanel/adminPanel";

/**
 * This component displays the details of a novelty (news item) and provides options for editing or deleting it.
 *
 * @returns {JSX.Element} The AboutNovelty component.
 */
export default function AboutNovelty(): JSX.Element {
  const pathname = usePathname();
  const noveltyId = pathname.split("/").pop();

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
      <AdminPanel
        entity={"novelty"}
        context={"READ"}
        extras={{
          entityId: noveltyId,
          url: "/admin/novelties",
        }}
      />
      {/* Display */}
      <section
        className={`flex flex-col items-center sm:items-start gap-3 p-2 md:p-10 ${componentBackground} ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={"Detalles de la novedad"} />
        {/* Promotional Image */}
        <div className="flex flex-col items-center sm:items-start gap-3 w-full">
          <Article label="Imagen Promocional" value={""} />
          <div className="flex flex-col w-2/3 h-1/3 place-self-center">
            <Image
              className="rounded"
              src={novelty.promotionalImage}
              alt={"imagen_promocional"}
              height={750}
              width={1250}
              
            />
          </div>
        </div>
        {/* Data */}
        <div className="flex flex-row items-center sm:items-start gap-3">
          <Article label="Título" value={novelty.title} />
          <Article label="Descripción" value={novelty.description} />
        </div>
        <div className="flex flex-row items-center sm:items-start gap-3">
          <Article label="Tipo" value={novelty.type} />
          <Article label="Contexto" value={novelty.context} />
        </div>
        <div className="flex flex-row items-center sm:items-start gap-3">
          <Article label="Fecha de Finalización" value={novelty.endDate.toString()} />
          <Article label="Código asociado" value={novelty.code ? novelty.code : "Sin Crear"} />
        </div>
      </section>
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
    <div
      className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}
    >
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
