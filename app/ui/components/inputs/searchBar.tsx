'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const activeSearch = (formData: FormData) => {
    const keyword = formData.get("keyword") as string;
    router.push(`/search/${keyword}`)
  }

  return (
      <form action={activeSearch} className="relative text-primary2 dark:text-secondary2">
        <div className="absolute inset-y-0 flex pointer-events-none left-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type="text"
          id="keyword"
          name="keyword"
          className="w-full py-3 text-lg rounded-full pl-14 
                text-primary2 dark:text-secondary2 dark:bg-secondary0 bg-primary0 
                dark:placeholder:text-secondary2 placeholder:text-primary2 placeholder:font-bold
                hover:bg-primary1 hover:border-primary2 hover:border-2
                hover:dark:bg-secondary1 hover:dark:border-secondary0"
          placeholder="Buscar productos"
          required
        />
      </form>
  );
}
