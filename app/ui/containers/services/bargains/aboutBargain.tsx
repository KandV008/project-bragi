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
import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import { getBargainRoute } from "@/app/api/routes";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import UnorderedList from "@/app/ui/components/tags/unorderedList/unorderedList";
import AdminPanel from "../../admin/adminPanel/adminPanel";

/**
 * AdminBargain component for managing and displaying a specific bargain.
 *
 * Fetches bargain details and allows editing or deleting it.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutBargain(): JSX.Element {
  const pathname = usePathname();
  const bargainId = pathname.split("/").pop();

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
    <div className={`flex flex-col gap-3 ${componentText}`}>
      {/* Actions */}
        <AdminPanel
          entity={"bargain"}
          context={"READ"}
          extras={{
            entityId: bargainId,
            url: "/admin/bargains",
          }}
        />
      {/* Display */}
      <section
        className={`flex flex-col items-center sm:items-start gap-3 p-2 md:p-10
          ${componentBackground} ${componentBorder} rounded-xl`}
      >
        <SectionHeader text="Detalles de la oferta" />
        {/* Basic Data */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-3">
          <Article label="Código" value={bargain.code} />
          <Article label="Título" value={bargain.title} />
        </div>
        {/* Description */}
        <Article label="Descripción" value={bargain.description} />
        {/* Status Data */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-3">
          <UnorderedList label="Requisitos" values={bargain.requirements} />
          <Article label="Estado" value={bargain.status ? "Activo" : "Inactivo"} />
        </div>
      </section>
    </div>
  );
}

/**
 * Skeleton loading state for the AdminBargain component.
 *
 * @returns {JSX.Element} The loading skeleton UI.
 */
export function AdminBargainSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}
    >
      {/* Display */}
      <section className="flex flex-col gap-3 p-10 bg-gray-100">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-2 gap-3">
          <ArticleSkeleton />
          <ArticleSkeleton />
        </div>
        <TextAreaInputSkeleton />
      </section>
    </div>
  );
}
