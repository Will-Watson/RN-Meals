import { View, Text, StyleSheet, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}}/>
      <Text>{selectedMeal.title}</Text>
      <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
      <Text>{selectedMeal.ingredients}</Text>
      <Text>{selectedMeal.steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
