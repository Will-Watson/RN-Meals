//import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = () => {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsContext.ids.includes(meal.id)
  // );
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;
