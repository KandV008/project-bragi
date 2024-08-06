'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

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
      <form action={activeSearch} className="relative text-emerald-900 dark:text-emerald-100">
        <div className="absolute inset-y-0 flex pointer-events-none left-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          id="keyword"
          name="keyword"
          className="w-full py-3 text-lg rounded-full pl-14 
                text-emerald-900 dark:text-emerald-100 
                bg-emerald-200 dark:bg-emerald-600  
                dark:placeholder:text-emerald-100 placeholder:text-emerald-900 placeholder:font-bold
                border-emerald-900 border-2 dark:border-emerald-100
                hover:bg-emerald-500 hover:dark:bg-emerald-500 "
          placeholder={placeholder}
          required
        />
      </form>
  );
}
