const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProductSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm`}
    >
      <div
        className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5
     border-solid text-primary2 dark:text-secondary0
    rounded rounded-tr-3xl 
    md:w-48 xl:w-64 h-fit"
      >
        {/* Information */}
        <section className="flex flex-col items-center justify-between gap-3">
          {/* Image */}
          <div className="flex p-4">
            <div className="size-28 md:size-40 xl:size-56 rounded-md bg-gray-200" />
          </div>
          {/* Text */}
          <div className="flex flex-col text-center truncate w-full px-6">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-20 rounded-md bg-gray-200" />
            <div className="md:self-end h-4 sm:h-6 xl:h-7 w-20 rounded-md bg-gray-200" />
          </div>
        </section>
        {/* Buttons */}
        <section className="flex flex-row flex-wrap justify-center gap-3 md:gap-2 xl:gap-1">
          <div className="h-8 w-12 md:w-24 md:h-10 xl:h-12 xl:w-40 rounded-2xl border-2 bg-gray-200" />
          <div className="h-8 w-12 md:size-10 xl:size-12 rounded-2xl border-2 bg-gray-200" />
        </section>
      </div>
    </div>
  );
}

export function SomeProductContainerSkeleton() {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  );
}

export function LatestNoveltiesSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <h1
        className="text-primary2 dark:text-secondary0
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit sm:w-48 md:w-60 lg:w-72"
      >
        Últimas novedades
        <div className="sm:w-48 md:w-60 lg:w-72 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainerSkeleton />
      </article>
    </div>
  );
}

export function RelatedProductsSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <h1
        className="text-primary2 dark:text-secondary0
              text-xl md:text-2xl lg:text-3xl font-bold
              w-fit sm:w-48 md:w-60 lg:w-72"
      >
        Productos relacionados
        <div className="sm:w-48 md:w-60 lg:w-72 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainerSkeleton />
      </article>
    </div>
  );
}

export function ProductOptionsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Product Images */}
        <article className="flex flex-col md:w-1/2 gap-3 lg:gap-2">
          {/* Main Image */}
          <div className="place-self-center">
            <div className="size-64 sm:size-72 lg:size-96 bg-gray-200"></div>
          </div>
          {/* Secondary Images */}
          <div className="flex flex-row gap-2 justify-center">
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
            <div className="size-20 sm:size-24 lg:size-32 bg-gray-200"></div>
          </div>
        </article>
        {/* Product Options */}
        <article className="flex flex-col  md:w-1/2 md:justify-around">
          {/* Name */}
          <div className="md:self-start h-7 sm:h-8 lg:h-10 w-64 rounded-md bg-gray-200" />
          {/* Brand */}
          <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
          {/* Price */}
          <div className="md:self-start h-8 sm:h-10 xl:h-12 w-40 rounded-md bg-gray-200" />

          {/* Color Buttons */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-1">
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
              <div className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200" />
            </div>
          </div>

          {/* Hearing Aid Side Buttons */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-3">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Insurance Button */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-row flex-wrap gap-1">
              <div className="h-8 w-24 border-2 rounded bg-gray-200" />
            </div>
          </div>
          {/* Include list */}
          <div className="w-fit">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
            <div className="flex flex-col flex-wrap gap-1">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Shopping Button */}
          <div
            className="w-64 sm:w-80 h-12 flex flex-row place-self-center md:place-self-start justify-center
          border-2 rounded bg-gray-200"
          />
        </article>
      </div>
    </div>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col-reverse md:flex-row gap-5">
        {/* Product Description */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <h2 className="md:self-start h-6 sm:h-5 xl:h-6 w-40 rounded-md bg-gray-200 mb-1" />
          <p className="md:self-start h-full w-full rounded-md bg-gray-200" />
        </article>
        {/* Product Attributes */}
        <article className="flex flex-col md:w-1/2 gap-2">
          <h2 className="md:self-start h-6 sm:h-5 xl:h-6 w-48 rounded-md bg-gray-200 mb-1" />
          {/* Ear Location */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-72 rounded-md bg-gray-200 mb-1" />
          {/* Adaptation Range */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />

          {/* Degree of Loss */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />

          {/* Level of Discretion */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-28 rounded-md bg-gray-200 mb-1" />

          {/* Dust and Water Resistance */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <span className="md:self-start h-4 sm:h-3 xl:h-4 w-8 rounded-md bg-gray-200 mb-1" />

          {/* Uses of the product */}
          <h4 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-row flex-wrap gap-5">
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col justify-center items-center size-10  rounded-3xl border-2"></div>
              <span className="md:self-start h-4 sm:h-3 xl:h-4 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export function AboutProductSkeleton() {
  return (
    <section className="flex flex-col gap-3">
      <ProductOptionsSkeleton />
      <ProductDetailsSkeleton />
    </section>
  );
}

export function FilterSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm p-4`}
    >
      <section className="p-4 rounded flex-col space-y-3 h-full bg-gray-100 hidden md:flex w-64">
        {/* Header */}
        <h1 className="w-fit text-primary2 dark:text-secondary0 text-3xl font-bold">
          Filtrar por:
          <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
        </h1>
        {/* Adaptation Range */}
        <article className="text-lg">
          <h2 className="md:self-start h-6 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>
        </article>
        {/* Water Dust Resistance */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>
        </article>
        {/* Brand */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Location */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Level of Discretion */}
        <article className="flex flex-col gap-3">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
        {/* Degree Of Loss */}
        <article className="text-lg">
          <h2 className="md:self-start h-5 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
          <form className="px-3">
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="size-4 rounded bg-gray-200"></div>
              <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
            </div>
          </form>{" "}
        </article>
      </section>
    </div>
  );
}

export function ProductContainerSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </section>
    </div>
  );
}

export function ProductInformationSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded rounded-tr-3xl bg-gray-100 shadow-sm`}
    >
      <section className="flex flex-row bg-gray-100 text-primary2 gap-5 p-5 border-2  rounded rounded-tr-3xl">
        {/* Image */}
        <div className="flex p-4">
          <div className="size-48  bg-gray-200 rounded" />
        </div>
        {/* Information */}
        <article className="flex flex-row gap-10 rounded-md p-3">
          {/* Product */}
          <div className="flex flex-col gap-10">
            {/* Name */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              {/* Brand */}
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />
            </div>
            {/* Price */}
            <div className="flex flex-col">
              <div className="md:self-start h-5 sm:h-6 xl:h-8 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-6 sm:h-8 xl:h-10 w-20 rounded-md bg-gray-200 mb-1" />
            </div>
          </div>
          {/* Choices */}
          <div className="flex flex-col self-center">
            {/* EarSide */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />
            </div>
            {/* Guarantee */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-8 rounded-md bg-gray-200 mb-1" />{" "}
            </div>
            {/* Color */}
            <div className="flex flex-col">
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
              <div className="md:self-start h-4 sm:h-5 xl:h-6 w-16 rounded-md bg-gray-200 mb-1" />{" "}
            </div>
          </div>
        </article>
        {/* Amount Button */}
        <article className="flex flex-col gap-4 self-center">
          <div className="md:self-center h-5 sm:h-6 xl:h-8 w-28 rounded-md bg-gray-200 mb-1" />
          <div className="flex flex-row gap-2">
            {/* Substract Button */}
            <div className="h-8 w-12 md:size-10 xl:size-11 rounded-2xl border-2 bg-gray-200" />
            {/* Amount */}
            <div className="md:self-start h-6 sm:h-8 xl:h-11 w-8 rounded-md bg-gray-200 mb-1" />
            {/* Addition Button */}
            <div className="h-8 w-12 md:size-10 xl:size-11 rounded-2xl border-2 bg-gray-200" />
          </div>
        </article>
      </section>
    </div>
  );
}

export function ShoppingListSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-5">
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
        <ProductInformationSkeleton />
      </section>
    </div>
  );
}

export function SummarySkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm `}
    >
      <section className="sticky top-32 flex flex-col w-full justify-between p-6 border-2 rounded">
        {/* Header */}
        <article>
          <div className="md:self-start h-10 w-32 rounded-md bg-gray-200 mb-1" />
          <div className="w-full border-2 border-t mb-3"></div>
        </article>
        {/* Body */}
        <article className="flex flex-col gap-3">
          {/* Header Table */}
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          {/* Rows Table */}
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
        </article>
        {/* Footer */}
        <article className="flex flex-col gap-2 ">
          <div className="w-full border-2 border-t mb-3"></div>
          {/* Total */}
          <div className="flex flex-row justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          {/* Shopping Button */}
          <div className="place-self-center">
            <div
              className="w-64 h-16 flex flex-row place-self-center md:place-self-start justify-center
                          border-2 rounded bg-gray-200"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
