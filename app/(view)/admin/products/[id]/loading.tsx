import { ColorButtonSkeleton } from "@/app/ui/components/buttons/colorButton";
import { BigImageSkeleton } from "@/app/ui/components/images/bigImage";
import { ArticleSkeleton } from "@/app/ui/components/tags/article";
import { ColorArticleSkeleton } from "@/app/ui/components/tags/colorArticle";
import { SectionHeaderSkeleton } from "@/app/ui/components/tags/sectionHeader";
import { UnorderedListSkeleton } from "@/app/ui/components/tags/unorderedList";
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
          {/* Brand */}
          <ArticleSkeleton />
          {/* Price */}
          <ArticleSkeleton />
        </div>
        {/* Description */}
        <ArticleSkeleton />
        {/* Colors */}
        <ColorArticleSkeleton />
        {/* Technical Data */}
        <div className="grid grid-cols-3 gap-5">
          {/* Adaptation Range */}
          <ArticleSkeleton />
          {/* Water Dust Resistance */}
          <ArticleSkeleton />
          {/* Ear Location */}
          <ArticleSkeleton />
          {/* Level of Discretion */}
          <ArticleSkeleton />
          {/* Degree of Loss */}
          <ArticleSkeleton />
        </div>
        {/* List of attributes */}
        <div className="grid grid-cols-2">
          {/* Includes */}
          <UnorderedListSkeleton />
          {/* Uses */}
          <UnorderedListSkeleton />
        </div>
      </section>
      {/* Image Preview */}
      <section className="flex flex-col justify-center gap-3">
        <SectionHeaderSkeleton />
        {/* Color Button */}
        <article className="self-center">
          <ColorButtonSkeleton />
        </article>
        {/* Images Preview */}
        <article className="flex flex-row gap-2 justify-center">
          <BigImageSkeleton />
          <BigImageSkeleton />
          <BigImageSkeleton />
        </article>
      </section>
    </div>
  );
}
