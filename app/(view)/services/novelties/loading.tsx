import { NoveltyContainerSkeleton } from "@/app/ui/components/novelties/novletyContainer";

export default function Loading() {
  return (
    <div className="flex flex-row w-full justify-center">
      <NoveltyContainerSkeleton />
    </div>
  );
}
