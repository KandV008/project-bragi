import { createContext } from 'react';

type CountShoppingListContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const CountShoppingListContext = createContext<CountShoppingListContextType>({
  counter: 0,
  setCounter: () => {},
});
