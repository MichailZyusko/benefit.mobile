import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useCartScreenSelector} from '../../redux/hooks';
import {selectCartScreen} from './slicer';
import {styles} from './styles';
import {Product} from '../../types';
import CartCard from '../../components/CartCard';
import {ScreenHeader} from './ScreenHeader';
import {ScanScreen} from '../scan';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CartScreen() {
  const {products} = useCartScreenSelector(selectCartScreen);

  const keyExtractor = useCallback(
    (item: Product, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: Product}) => <CartCard product={item} />,
    [],
  );

  const calculateAmountPrice = () => {
    const reducer = (acc: number, curr: Product) =>
      acc + +curr.price * curr.quantity;

    return products.reduce(reducer, 0).toFixed(2);
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        style={styles.flatList}
        numColumns={1}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Всего {products.length} товаров в корзине
        </Text>
        <Text style={styles.summaryText}>{calculateAmountPrice()} руб.</Text>
      </View>
    </View>
  );
}

export const CartScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Корзина"
        component={CartScreen}
        options={{headerTitle: () => <ScreenHeader />}}
      />
      <Stack.Screen name="QR-code  сканнер" component={ScanScreen} />
    </Stack.Navigator>
  );
};
