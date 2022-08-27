import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {categories, MainCategory} from '../../constants/categories';
import CategoryCard from '../../components/CategoryCard';
import {ScreenHeader} from './ScreenHeader';
import {ScanScreen} from '../scan';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SubCategoryScreen} from './Components';

const Stack = createNativeStackNavigator();

export default function CategoriesScreen() {
  const keyExtractor = useCallback(
    (item: MainCategory, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: MainCategory}) => <CategoryCard category={item} />,
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        style={styles.flatList}
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
        options={{headerTitle: () => <ScreenHeader />}}
      />
      <Stack.Screen name="QR-code  сканнер" component={ScanScreen} />
      <Stack.Screen name="Подктагории" component={SubCategoryScreen} />
    </Stack.Navigator>
  );
};
