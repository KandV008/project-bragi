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
import { Protect } from "@clerk/nextjs";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { toggleStatusNovelty } from "@/db/novelty/novelty";
import MediumButtonWithIcon from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import SmallButtonWithIcon from "@/app/ui/components/buttons/smallButtonWithIcon/smallButtonWithIcon";
import { valueOfNoveltyType } from "@/app/model/entities/novelty/enums/NoveltyType";
import { valueOfNoveltyContext } from "@/app/model/entities/novelty/enums/NoveltyContext";
import { getDateValue, getSpanishHourValue } from "@/lib/utils";

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

  const isActive = novelty.status;
  const labelActiveButton = isActive ? "Desactivar Novedad" : "Activar Novedad";
  const formActiveButton = async () => {
    const updatedNovelty = await toggleStatusNovelty(noveltyId!);
    setNovelty(updatedNovelty);
  };

  const endDate = `${getDateValue(
    novelty.endDate.toString()
  )} - ${getSpanishHourValue(novelty.endDate.toString())}`;

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
        <SectionHeader text={novelty.title} />
        {/* Promotional Image */}
        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-5 w-full">
          <div className="flex flex-col p-2 sm:w-2/3 h-1/3 place-self-center">
            <Image
              className="rounded"
              src={novelty.promotionalImage}
              alt={"imagen_promocional"}
              height={640}
              width={1080}
            />
          </div>
        </div>
        {/* Data */}
        <div className="flex text-justify flex-row items-center sm:items-start gap-3">
          <Article label="" value={novelty.description} />
        </div>
        <div className="flex flex-col w-full justify-center md:flex-row items-center gap-3">
          <Article label="Tipo" value={valueOfNoveltyType(novelty.type)} />
          <Article
            label="Contexto al que aplica"
            value={valueOfNoveltyContext(novelty.context)}
          />
          <Article label="Fecha de Finalización" value={endDate} />
        </div>
        {/* Switch Active */}
        <Protect permission="org:product:managment">
          <br></br>
          <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
          <div className="flex flex-col sm:flex-row w-full gap-2 items-center justify-center">
            <Article
              label="Código asociado"
              value={novelty.code ? novelty.code : "Sin Crear"}
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
          <div className="flex flex-col w-56 md:w-2/3 place-self-center">
            <div className="h-44 md:h-80 w-full bg-gray-200"></div>
          </div>
        </div>
        <TextAreaInputSkeleton />

        {/* Data */}
        <div className="flex flex-col w-full justify-center md:flex-row items-center gap-1  lg:gap-3">
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
        </div>
      </section>
    </div>
  );
}
