import { BigImageSkeleton } from "@/app/ui/components/images/bigImage";
import { TextAreaInputSkeleton } from "@/app/ui/components/inputs/textAreaInput";
import { ArticleSkeleton } from "@/app/ui/components/tags/article";
import { SectionHeaderSkeleton } from "@/app/ui/components/tags/sectionHeader";
import { shimmer } from "@/app/ui/tailwindClasses";

export default function Loading() {
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
          {/* Title */}
          <ArticleSkeleton />
          {/* Description */}
          <TextAreaInputSkeleton />
        </div>
      </section>
    </div>
  );
}
