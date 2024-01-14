import { View, Text, StyleSheet, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{uri: selectedMeal.imageUrl}}/>
      <Text>{selectedMeal.title}</Text>
      {/* <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View> */}
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
