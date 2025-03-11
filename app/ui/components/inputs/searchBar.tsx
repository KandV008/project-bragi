'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { componentText, fillDefaultComponentBackground, hoverFillDefaultComponentBackground, componentBorder } from "../../tailwindClasses";
import Link from "next/link";

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
  const [keyword, setKeyword] = useState(''); 

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
    <form onSubmit={handleSubmit} className={`relative ${componentText}`}>
      <div className="absolute inset-y-5 flex pointer-events-none left-5">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        id="keyword"
        name="keyword"
        value={keyword}
        onChange={handleInputChange}
        className={`w-full py-3 text-lg rounded-full 
              ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
              ${componentBorder}
              dark:placeholder:text-emerald-100 placeholder:text-emerald-900 placeholder:font-bold`}
        placeholder={placeholder}
        maxLength={255}
        required
      />
      <Link href={`/search/${encodeURIComponent(keyword)}`} id={id} />
    </form>
  );
}
