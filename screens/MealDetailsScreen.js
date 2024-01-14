import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Details Screen {mealId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
