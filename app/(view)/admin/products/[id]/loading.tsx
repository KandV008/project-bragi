const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function Loading() {
  return (
    <div className={`${shimmer} flex flex-col gap-3 relative overflow-hidden rounded rounded-tr-3xl shadow-sm`}>
      {/* Display */}
      <section
        className="flex flex-col gap-3 p-10 bg-gray-100">
        <div className="md:self-start h-7 sm:h-8 lg:h-10 w-96 rounded-md bg-gray-200" />
        {/* Basic Data */}
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
          {/* Category */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
          {/* Brand */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
          {/* Price */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
        </div>
        {/* Description */}
        <div className="md:self-start h-10 sm:h-12 lg:h-16 w-full rounded-md bg-gray-200" />
        {/* Colors */}
        <div className="w-full">
          <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-col flex-wrap gap-1 px-5">
            <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
          </div>
        </div>
        {/* Technical Data */}
        <div className="grid grid-cols-3 gap-5">
          {/* Adaptation Range */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-52 rounded-md bg-gray-200" />
          {/* Water Dust Resistance */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-52 rounded-md bg-gray-200" />
          {/* Ear Location */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-52 rounded-md bg-gray-200" />
          {/* Level of Discretion */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-52 rounded-md bg-gray-200" />
          {/* Degree of Loss */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-52 rounded-md bg-gray-200" />
        </div>
        {/* List of attributes */}
        <div className="grid grid-cols-2">
          {/* Includes */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-col flex-wrap gap-1">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Uses */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-col flex-wrap gap-1">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
        </div>
      </section>
      {/* Image Preview */}
      <section className="flex flex-col justify-center gap-3">
        <div className="md:self-start  h-7 sm:h-8 lg:h-10 w-96 rounded-md bg-gray-200" />
        <div className="w-fit self-center">
          <div className="flex flex-row flex-wrap gap-1">
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />

          </div>
        </div>
        <article className="flex flex-row gap-2 justify-center">
          <div className="place-self-center">
            <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
          </div>
          <div className="place-self-center">
            <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
          </div>
        </article>
      </section>
    </div>
  );
}
