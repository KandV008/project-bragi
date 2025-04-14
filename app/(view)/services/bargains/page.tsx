"use client";

import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import BargainContainer from "@/app/ui/components/bargains/bargainContainer/bargainContainer";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { getBargainsRoute } from "@/app/api/routes";
import Spinner from "@/app/ui/components/common/spinner/spinner";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";

/**
 * Page component that displays a list of bargains.
 * This component fetches bargain data and displays it using the `BargainContainer`. 
 * It handles loading states, pagination, and displays a spinner while fetching additional data.
 *
 * @returns {JSX.Element} The Bargains page component.
 */
export default function Page(): JSX.Element {
  const [bargains, setBargains] = useState<BargainEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSpinnerActive, setSpinnerActive] = useState(false);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(4);
  const increment = 5;

  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);

    fetch(
      `${getBargainsRoute}?start=${startIndex}&end=${endIndex}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setBargains(data);
        } else {
          setBargains((prev) => prev.concat(data));
        }
        setLoading(false);
        setSpinnerActive(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, isLoading, startIndex]);

  if (isLoading) return <Loading />;
  if (bargains.length === 0) return <EmptyMessage />;

  /**
   * Function to load more bargains by updating the start and end index.
   * It fetches the next set of bargains from the API.
   */
  const addMoreBargains = () => {
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
      <BargainContainer
        bargains={bargains}
        moreBargain={addMoreBargains}
        showMoreButton={bargains.length === endIndex + 1}
      />
    </>
  );
}
