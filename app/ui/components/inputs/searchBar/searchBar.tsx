"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  componentText,
  fillDefaultComponentBackground,
  hoverFillDefaultComponentBackground,
  componentBorder,
} from "@/app/ui/tailwindClasses";

/**
 * Props for the SearchBar component.
 */
interface SearchBarProps {
  /** Determines if the search bar is in compressed mode */
  isCompress: boolean;
}

/**
 * A search bar component with an optional compressed mode.
 *
 * @param {SearchBarProps} props - The properties for the search bar component.
 * @returns {JSX.Element} The rendered search bar component.
 */
export default function SearchBar({ isCompress }: SearchBarProps): JSX.Element {
  const [keyword, setKeyword] = useState("");

  /** Placeholder text based on the compression mode */
  const placeholder = isCompress ? "Buscar" : "Buscar productos";
  /** ID for the search bar, used to trigger search */
  const id = isCompress ? "compressSearchBar" : "searchBar";

  /**
   * Handles input change and updates the keyword state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  /**
   * Handles form submission and triggers a search.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById(id)?.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
      h-auto w-full font-semibold mx-2 md:mx-0
      ${fillDefaultComponentBackground} 
      ${componentText}
      ${componentBorder} rounded-2xl`}
    >
      <div className="flex items-center align-bottom bg-transparent">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        id="keyword"
        name="keyword"
        value={keyword}
        onChange={handleInputChange}
        className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 dark:placeholder:text-emerald-100 placeholder:text-emerald-900"
        placeholder={placeholder}
        maxLength={255}
        required
      />
      <Link href={`/search/${encodeURIComponent(keyword)}`} id={id} />
    </form>
  );
}
