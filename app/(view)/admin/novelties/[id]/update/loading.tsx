import { NoveltyFormSkeleton } from "@/app/ui/containers/admin/novelties/noveltyForm";

export default function Loading() {
  return (
    <div className="flex flex-col">
        <NoveltyFormSkeleton />
    </div>
  );
}
