import { BargainContainerSkeleton } from "@/app/ui/components/bargains/bargainContainer/bargainContainer";

/**
 * Loading component that displays a skeleton loader while the content is being fetched.
 * This component renders the `BargainContainerSkeleton` inside a flex container to center it on the page.
 *
 * @returns {JSX.Element} The Loading component displaying the bargain skeleton loader.
 */
export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <BargainContainerSkeleton />
    </div>
  );
}
