"use client";

import { BargainEntity } from "@/app/model/entities/Bargain";
import Bargain, { BargainSkeleton } from "./bargain";
import MediumButton from "../buttons/mediumButton";
import { shimmer } from "../../tailwindClasses";

interface BargainContainerProps {
  bargains: BargainEntity[];
  moreBargain?: () => void;
  showMoreButton: boolean;
  isPreview?: boolean; 
}

export default function BargainContainer({
  bargains,
  moreBargain,
  showMoreButton,
  isPreview
}: BargainContainerProps) {
  return (
    <section className="flex flex-col gap-10 w-full items-center">
      <article className="flex flex-col w-full p-3 md:w-2/3 lg:w-1/2 gap-3 items-center self-center">
        {bargains.map((bargain) => (
          <Bargain
            key={bargain.code}
            title={bargain.title}
            description={bargain.description}
            code={bargain.code}
            isPreview={isPreview}
          />
        ))}
      </article>
      {showMoreButton ? (
        <article className="self-center">
          <MediumButton text="Ver más" onClick={moreBargain} />
        </article>
      ) : (
        <></>
      )}
    </section>
  );
}

export function BargainContainerSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
        <BargainSkeleton />
        <BargainSkeleton />
        <BargainSkeleton />
        <BargainSkeleton />
        <BargainSkeleton />
        <BargainSkeleton />
      </section>
    </div>
  );
}
