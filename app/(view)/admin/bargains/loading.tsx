import { BargainContainerSkeleton } from "@/app/ui/components/bargains/bargainContainer";

export default function Loading() {
  return (
    <div className="flex flex-row w-full justify-center">
      <BargainContainerSkeleton />
    </div>
  );
}
