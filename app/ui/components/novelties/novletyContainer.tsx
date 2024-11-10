"use client";

import MediumButton from "../buttons/mediumButton";
import { shimmer } from "../../tailwindClasses";
import Novelty, { NoveltySkeleton } from "./novelty";
import { NoveltyEntity } from "@/app/model/entities/Novelty";

interface NoveltyContainerProps {
  novelties: NoveltyEntity[];
  moreNovelty?: () => void;
  showMoreButton: boolean;
  isPreview?: boolean; 
}

export default function NoveltyContainer({
  novelties,
  moreNovelty,
  showMoreButton,
  isPreview
}: NoveltyContainerProps) {
  return (
    <section className="flex flex-col gap-10 w-full items-center">
      <article className="flex flex-col w-full p-3 md:w-2/3 lg:w-1/2 gap-3 items-center self-center">
        {novelties.map((novelty) => (
          <Novelty
            key={novelty.id}
            id={novelty.id}
            title={novelty.title}
            description={novelty.description}
            promotionalImage={novelty.promotionalImage}
            isPreview={isPreview}
          />
        ))}
      </article>
      {showMoreButton ? (
        <article className="self-center">
          <MediumButton text="Ver más" onClick={moreNovelty} />
        </article>
      ) : (
        <></>
      )}
    </section>
  );
}

export function NoveltyContainerSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
        <NoveltySkeleton />
        <NoveltySkeleton />
        <NoveltySkeleton />
        <NoveltySkeleton />
        <NoveltySkeleton />
        <NoveltySkeleton />
      </section>
    </div>
  );
}
