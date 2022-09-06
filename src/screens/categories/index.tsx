import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {categories, Category_L1} from '../../constants/categories';
import CategoryCard from '../../components/CategoryCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHeader} from '../../components/ScreenHeader';
import {SubCategoryScreen} from './screens/subCategoryScreen';

const Stack = createNativeStackNavigator();

function CategoriesScreen() {
  const keyExtractor = useCallback(
    (_item: Category_L1, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: Category_L1}) => <CategoryCard category={item} />,
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.row}
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

export const CategoryScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Категории"
        component={CategoriesScreen}
        options={{
          headerTitle: () => <ScreenHeader title="Категории" />,
        }}
      />
      <Stack.Screen name="Подктагории" component={SubCategoryScreen} />
    </Stack.Navigator>
  );
};
