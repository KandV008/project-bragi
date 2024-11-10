'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { componentText, fillDefaultComponentBackground, hoverFillDefaultComponentBackground, componentBorder } from "../../tailwindClasses";
import Link from "next/link";

interface SearchBarProps {
  isCompress: boolean;
}

export default function SearchBar({ isCompress }: SearchBarProps) {
  const [keyword, setKeyword] = useState(''); 

  const placeholder = isCompress ? "Buscar" : "Buscar productos";
  const id = isCompress ? "compressSearchBar" : "searchBar";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

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
        className={`w-full py-3 text-lg rounded-full pl-14 
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
