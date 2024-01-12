import { View, Text, StyleSheet } from 'react-native';
// import {useRoute} from '@react-navigation/native';

import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route}) => {
  // const route = useRoute();
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});

export default MealsOverviewScreen;
