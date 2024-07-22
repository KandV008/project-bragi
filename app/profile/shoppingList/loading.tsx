import { ShoppingListSkeleton, SummarySkeleton } from "@/app/components/common/skeletons";

export default function Loading(){
    return(
        <main className="flex flex-row flex-grow justify-center space-y-3 place-self-center md:space-y-10 py-5 w-11/12 xl:w-4/6 gap-2">
        <ShoppingListSkeleton />
        <div className="shrink-0">
          <SummarySkeleton />
        </div>
      </main>
    );
}