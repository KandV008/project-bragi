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
        {/* Basic Data */}
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <ArticleSkeleton />
          {/* Category */}
          <ArticleSkeleton />
        </div>
        {/* Description */}
        <TextAreaInputSkeleton />
      </section>
    </div>
  );
}
