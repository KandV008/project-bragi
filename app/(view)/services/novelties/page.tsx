"use client";

import { useEffect, useState } from "react";
import { getActiveNoveltiesRoute } from "@/app/api/routes";
import Loading from "./loading";
import NoveltyContainer from "@/app/ui/components/novelties/noveltyContainer/noveltyContainer";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import Spinner from "@/app/ui/components/common/spinner/spinner";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import AdminPanel from "@/app/ui/containers/admin/adminPanel/adminPanel";

/**
 * Page component that handles the display of novelties.
 * It fetches novelty data from the API and renders a loading skeleton or the actual novelties content.
 * If no novelties are available, it shows an empty message.
 *
 * @returns {JSX.Element} The component rendering novelties or loading states.
 */
export default function Page(): JSX.Element {
  const [novelties, setNovelties] = useState<NoveltyEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSpinnerActive, setSpinnerActive] = useState(false);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(4);
  const increment = 5;

  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);

    fetch(`${getActiveNoveltiesRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setNovelties(data);
        } else {
          setNovelties((prev) => prev.concat(data));
        }
        setLoading(false);
        setSpinnerActive(false);
      })
      .catch((error) => console.error("Error fetching novelties:", error));
  }, [endIndex, isLoading, startIndex]);

  if (isLoading) return <Loading />;
  if (novelties.length === 0) return <EmptyMessage />;

  /**
   * Increments the start and end index values to fetch more novelties.
   */
  const addMoreNovelties = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <>
      <AdminPanel
        entity={"novelty"}
        context={"ALL"}
        extras={{
          url: "/admin",
        }}
      />
      {isSpinnerActive ? (
        <div className="fixed top-36 right-0 xl:right-80 transform -translate-x-1/2 z-50">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      <NoveltyContainer
        novelties={novelties}
        moreNovelty={addMoreNovelties}
        showMoreButton={novelties.length === endIndex + 1}
      />
    </>
  );
}
