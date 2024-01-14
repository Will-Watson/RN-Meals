import { View, Text, StyleSheet } from 'react-native';

const SubTitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SubTitle;
