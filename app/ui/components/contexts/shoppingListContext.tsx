import { ShoppingProductDTO } from '@/app/model/entities/shoppingProductDTO/ShoppingProductDTO';
import { createContext } from 'react';

type ShoppingListContextType = {
  shoppingList: ShoppingProductDTO[];
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingProductDTO[]>>;
};

export const ShoppingListContext = createContext<ShoppingListContextType>({
  shoppingList: [],
  setShoppingList: () => {},
});
