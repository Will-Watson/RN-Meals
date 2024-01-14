import { View, Text, StyleSheet, Image } from 'react-native';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Image />
      <Text>Meal Details Screen {mealId}</Text>
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
