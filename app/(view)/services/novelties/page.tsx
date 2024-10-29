"use client";

import Spinner from "@/app/ui/components/common/spinner";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";
import { useEffect, useState } from "react";
import { getNoveltiesRoute } from "@/app/api/routes";
import Loading from "./loading";
import NoveltyContainer from "@/app/ui/components/novelties/novletyContainer";
import { NoveltyEntity } from "@/app/model/entities/Novelty";

export default function Page() {
  const [novelties, setNovelties] = useState<NoveltyEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSpinnerActive, setSpinnerActive] = useState(false);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(4);
  const increment = 5;

  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);

    fetch(
      `${getNoveltiesRoute}?start=${startIndex}&end=${endIndex}`
    )
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
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, isLoading, startIndex]);

  if (isLoading) return <Loading />; 
  if (novelties.length === 0) return <EmptyMessage />;

  const addMoreNovelties = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <>
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
