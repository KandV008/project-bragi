"use client";

import { BargainEntity } from "@/app/model/entities/Bargain";
import Bargain from "./bargain";
import MediumButton from "../buttons/mediumButton";

interface BargainContainerProps {
  bargains: BargainEntity[];
  moreBargain?: () => void;
  showMoreButton: boolean;
}

export default function BargainContainer({
  bargains,
  moreBargain,
  showMoreButton,
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
