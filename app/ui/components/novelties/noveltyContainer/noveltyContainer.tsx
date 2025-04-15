"use client";

import { shimmer } from "../../../tailwindClasses";
import MediumButton from "../../buttons/mediumButton/mediumButton";
import Novelty, { NoveltySkeleton } from "../novelty/novelty";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";

/**
 * Props for the NoveltyContainer component.
 *
 * @property {NoveltyEntity[]} novelties - An array of novelty objects to be displayed.
 * @property {() => void} [moreNovelty] - Optional function to load more novelties.
 * @property {boolean} showMoreButton - Determines whether the "Ver más" button should be displayed.
 * @property {boolean} [isPreview] - Indicates whether the novelties should be displayed in preview mode.
 */
interface NoveltyContainerProps {
  novelties: NoveltyEntity[];
  moreNovelty?: () => void;
  showMoreButton: boolean;
  isPreview?: boolean; 
}

/**
 * A container component that displays a list of novelty items.
 * Optionally includes a "Ver más" button to load additional novelties.
 *
 * @param {NoveltyContainerProps} props - The properties for the NoveltyContainer component.
 * @returns {JSX.Element} The rendered NoveltyContainer component.
 */
export default function NoveltyContainer({
  novelties,
  moreNovelty,
  showMoreButton,
  isPreview
}: NoveltyContainerProps): JSX.Element {
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
      ) : null}
    </section>
  );
}

/**
 * A skeleton loading component for the NoveltyContainer component.
 * Displays multiple loading placeholders for novelties.
 *
 * @returns {JSX.Element} The skeleton loader for the NoveltyContainer component.
 */
export function NoveltyContainerSkeleton(): JSX.Element {
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
