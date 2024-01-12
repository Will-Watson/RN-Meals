import { Pressable, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = ({title, color}) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({});

export default CategoryGridTile;
