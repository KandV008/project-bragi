import { createContext } from 'react';

type DeletingContextType = {
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
};

export const DeletingContext = createContext<DeletingContextType>({
  selectedValues: [],
  setSelectedValues: () => {},
});
