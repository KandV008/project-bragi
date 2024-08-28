'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { componentBorder, componentText, fillDefaultComponentBackground, hoverFillDefaultComponentBackground } from "@/lib/tailwindClasses";

interface SearchBarProps{
  isCompress: boolean
}

export default function SearchBar({ isCompress }: SearchBarProps) {
  const router = useRouter();

  const placeholder = isCompress ? "Buscar" : "Buscar productos"

  const activeSearch = (formData: FormData) => {
    const keyword = formData.get("keyword") as string;
    router.push(`/search/${keyword}`)
  }

  return (
      <form action={activeSearch} className={`relative ${componentText}`}>
        <div className="absolute inset-y-5 flex pointer-events-none left-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          id="keyword"
          name="keyword"
          className={`w-full py-3 text-lg rounded-full pl-14 
                ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
                ${componentBorder}
                dark:placeholder:text-emerald-100 placeholder:text-emerald-900 placeholder:font-bold`}
          placeholder={placeholder}
          required
        />
      </form>
  );
}
