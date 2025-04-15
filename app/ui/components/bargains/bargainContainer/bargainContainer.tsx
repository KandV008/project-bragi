"use client";

import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import Bargain, { BargainSkeleton } from "../bargain/bargain";
import { shimmer } from "../../../tailwindClasses";
import MediumButton from "../../buttons/mediumButton/mediumButton";

/**
 * Props for the `BargainContainer` component.
 */
interface BargainContainerProps {
  /** Array of bargains to display. */
  bargains: BargainEntity[];
  /** Callback function triggered when "Ver más" is clicked. */
  moreBargain?: () => void;
  /** Determines if the "Ver más" button should be displayed. */
  showMoreButton: boolean;
  /** Indicates if the bargains are displayed in preview mode. */
  isPreview?: boolean;
}

/**
 * A container component for displaying a list of bargains with an optional "Ver más" button.
 *
 * @param {BargainContainerProps} props - The props for the `BargainContainer` component.
 * @returns {JSX.Element} The `BargainContainer` component.
 */
export default function BargainContainer({
  bargains,
  moreBargain,
  showMoreButton,
  isPreview,
}: BargainContainerProps): JSX.Element {
  return (
    <section className="flex flex-col gap-10 w-full items-center">
      <article className="flex flex-col w-full p-3 md:w-2/3 lg:w-1/2 gap-3 items-center self-center">
        {bargains.map((bargain) => (
          <Bargain
            key={bargain.id}
            id={bargain.id}
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
      ) : null}
    </section>
  );
}

/**
 * Skeleton loader for the `BargainContainer` component.
 *
 * This component is used to show placeholder content while the bargains are being loaded.
 *
 * @returns {JSX.Element} The `BargainContainerSkeleton` component.
 */
export function BargainContainerSkeleton(): JSX.Element {
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
