import { createContext } from 'react';

type DeletingProductsContextType = {
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const DeletingProductsContext = createContext<DeletingProductsContextType>({
  selectedValues: [],
  setSelectedValues: () => {},
});
