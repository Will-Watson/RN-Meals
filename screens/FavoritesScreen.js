import { useContext } from 'react';

import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;
