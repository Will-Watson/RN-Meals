import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = (item) => {
  
}

const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
  );
};

export default CategoriesScreen;
