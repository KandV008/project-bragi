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
import UnorderedList, {
  UnorderedListSkeleton,
} from "@/app/ui/components/tags/unorderedList/unorderedList";
import AdminPanel from "../../admin/adminPanel/adminPanel";
import { Protect } from "@clerk/nextjs";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { toggleStatusBargain } from "@/db/bargain/bargain";
import SmallButtonWithIcon from "@/app/ui/components/buttons/smallButtonWithIcon/smallButtonWithIcon";

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

  const isActive = bargain.status;
  const labelActiveButton = isActive ? "Desactivar Oferta" : "Activar Oferta";
  const formActiveButton = async () => {
    const updatedBargain = await toggleStatusBargain(bargainId!);
    setBargain(updatedBargain);
  };

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
        className={`flex flex-col place-self-center items-center sm:items-start pag-2 sm:gap-5 p-4 md:p-10
          ${componentBackground} ${componentBorder} rounded-xl w-5/6 sm:w-2/3`}
      >
        <SectionHeader text={bargain.title} />
        {/* Description */}
        <Article label="" value={bargain.description} />

        {/* Status Data */}
        <div className="flex flex-col items-start sm:grid sm:grid-cols-2 gap-3">
          <Article label="Código para usar en la cesta:" value={bargain.code} />
          <UnorderedList
            label="Requisitos para activar el código:"
            values={bargain.requirements}
          />
        </div>
        {/* Switch Active */}
        <Protect permission="org:product:managment">
          <br></br>
          <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
          <div className="flex flex-col sm:flex-row w-full gap-2 items-center justify-center">
            <Article
              label="Estado"
              value={bargain.status ? "Activo" : "Inactivo"}
            />
            <div className="hidden sm:block">
              <MediumButtonWithIcon
                text={labelActiveButton}
                icon={faBoltLightning}
                subtext={""}
                onClick={formActiveButton}
                type={"default"}
              />
            </div>
            <div className="block sm:hidden">
              <SmallButtonWithIcon
                icon={faBoltLightning}
                text={labelActiveButton}
                subtext={""}
                onClick={formActiveButton}
              />
            </div>
          </div>
        </Protect>
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
      className={`${shimmer} flex flex-col place-self-center gap-5 w-2/3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}
    >
      {/* Display */}
      <section className="flex flex-col gap-3 p-4 lg:p-10 bg-gray-100">
        <SectionHeaderSkeleton />
        <TextAreaInputSkeleton />
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
          <ArticleSkeleton />
          <UnorderedListSkeleton />
        </div>
      </section>
    </div>
  );
}
