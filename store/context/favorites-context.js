import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({children}) => {

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => mealId !== id);
    });
  };


  return <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
