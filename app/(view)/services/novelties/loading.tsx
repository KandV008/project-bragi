import { NoveltyContainerSkeleton } from "@/app/ui/components/novelties/noveltyContainer/noveltyContainer";

/**
 * Loading component displayed while novelties data is being fetched.
 * This component renders a skeleton loader for novelties content until the actual data is ready.
 *
 * @returns {JSX.Element} The loading skeleton component for novelties.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <NoveltyContainerSkeleton />
    </div>
  );
}
