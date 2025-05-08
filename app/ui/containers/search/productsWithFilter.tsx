import { useEffect, useState } from "react";
import Filter from "./filter/filter";
import Loading from "@/app/(view)/search/loading";
import {
  fillDefaultComponentBackground,
  hoverFillDefaultComponentBackground,
  componentText,
  componentBorder,
} from "../../tailwindClasses";
import { ProductEntity } from "@/app/model/entities/product/Product";
import ProductContainer from "../../components/products/productContainer/productContainer";
import Spinner from "../../components/common/spinner/spinner";
import EmptyMessage from "../../components/messages/emptyMessage/emptyMessage";

interface ProductsWithFilterProps {
  /** The API endpoint to fetch products from. */
  fetchURL: string;
}

/**
 * Component to display a list of products with a filter system.
 * Fetches products from a given API endpoint and applies filters dynamically.
 *
 * @param {ProductsWithFilterProps} props - The component props.
 * @param {string} props.fetchURL - The API endpoint to fetch products from.
 * @returns {JSX.Element} The rendered component.
 */
export default function ProductsWithFilter({
  fetchURL,
}: ProductsWithFilterProps): JSX.Element {
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  const [filters, setFilters] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;

  const [isSpinnerActive, setSpinnerActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Toggles the filter menu visibility on small screens.
   */
  const toggleExpandMenu = () => {
    setIsExpanded(!isExpanded);
  };

  /**
   * Fetches products from the given API endpoint, applying pagination and filters.
   *
   * @returns {void}
   */
  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);
    const joinFilters = filters.join(",");

    if (fetchURL) {
      fetch(
        `${fetchURL}&start=${startIndex}&end=${endIndex}&filters=${joinFilters}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (startIndex === 0) {
            setProduct(data);
          } else {
            setProduct((prev) => prev.concat(data));
          }
          setLoading(false);
          setSpinnerActive(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [endIndex, fetchURL, filters, isLoading, startIndex]);

  if (isLoading) return <Loading />;
  if (products.length === 0) return <EmptyMessage />;

  /**
   * Increases the product list pagination to load more products.
   *
   * @returns {void}
   */
  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  /**
   * Handles adding/removing filters from the active filter list.
   * If the same filter is already applied, it is removed.
   * Otherwise, it updates or adds the filter.
   *
   * @param {string} filter - The filter to be added or removed.
   * @returns {void}
   */
  const filterAction = (filter: string) => {
    setFilters((prev) => {
      const index = prev.findIndex((value) =>
        value.startsWith(filter.split(":")[0])
      );

      if (index === -1) {
        return [...prev, filter];
      } else if (prev[index] === filter) {
        const newFilters = [...prev];
        newFilters.splice(index, 1);
        return newFilters;
      } else {
        const newFilters = [...prev];
        newFilters[index] = filter;
        return newFilters;
      }
    });
    
    setStartIndex(0);
    setEndIndex(9);
  };

  return (
    <div className="relative w-full">
      {isSpinnerActive ? (
        <div className="fixed top-36 right-0 xl:right-80 transform -translate-x-1/2 z-50">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col md:flex-row w-full justify-between gap-2">
        {/* Big Screen Filter */}
        <div className="shrink-0 hidden md:flex">
          <Filter onChange={filterAction} />
        </div>
        {/* Small Screen Filter */}
        <div className="block md:hidden shrink-0">
          <button
            onClick={toggleExpandMenu}
            id="expand-toggle"
            className={`w-fit rounded-2xl border-2 border-transparent p-3 fixed
      ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
      ${componentText} font-bold`}
          >
            {isExpanded ? "Cerrar Filtros" : "Abrir Filtros"}
          </button>
          {/* Filter */}
          <div className="flex justify-center z-20 w-full origin-top-right bg-transparent focus:outline-none ">
            {isExpanded ? (
              <div
                className={`flex flex-col gap-1 w-fit fixed top-64
            ${componentBorder} rounded overflow-y-scroll max-h-96`}
              >
                <Filter onChange={filterAction} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Product Container */}
        <div className="md:size-fit lg:px-12">
          <ProductContainer
            products={products}
            moreProduct={addMoreProducts}
            showMoreButton={products.length === endIndex + 1}
          />
        </div>
      </div>
    </div>
  );
}
