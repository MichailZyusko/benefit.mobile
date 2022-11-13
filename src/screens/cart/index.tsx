// import React, { useCallback, useMemo } from 'react';
// import { FlatList, Text, View } from 'react-native';
// import { useCartScreenSelector } from '../../redux/hooks';
// import { selectCartScreen } from './slicer';
// import { styles } from './styles';
// import CartCard from '../../components/CartCard';
// import { ScanScreen } from '../scan';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenHeader } from '../../components/ScreenHeader';
// import ProductDto from '../../components/ProductCard/dto';
// import { round } from '../../utils/roundNumber';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const Stack = createNativeStackNavigator();

// export default function CartScreen() {
//   const { products } = useCartScreenSelector(selectCartScreen);

//   const keyExtractor = useCallback(
//     (_item: ProductDto, index: number) => index.toString(),
//     []
//   );

//   const renderItem = useCallback(
//     ({ item }: { item: ProductDto }) => <CartCard product={item} />,
//     []
//   );

//   const calculateAmountPrice = useMemo(() => {
//     const reducer = (acc: number, curr: ProductDto) =>
//       acc + +curr.price * curr.quantity;

//     return round(products.reduce(reducer, 0));
//   }, [products]);

//   const calculateAmountQuantity = useMemo(() => {
//     const reducer = (acc: number, curr: ProductDto) => acc + curr.quantity;

//     return products.reduce(reducer, 0);
//   }, [products]);

//   return (
//     <View style={styles.screenContainer}>
//       <FlatList
//         style={styles.flatList}
//         data={products}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//       />
//       <View style={styles.summaryContainer}>
//         <Text style={styles.summaryText}>
//           Всего {calculateAmountQuantity} товаров в корзине
//         </Text>
//         <Text style={styles.summaryText}>{calculateAmountPrice} руб.</Text>
//       </View>
//     </View>
//   );
// }

// export const CartScreenStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Корзина"
//         component={CartScreen}
//         options={{
//           headerTitle: () => (
//             <ScreenHeader
//               title="Корзина"
//               iconProps={{
//                 name: 'ios-map-outline',
//                 screenName: 'QR-code  сканнер',
//               }}
//             />
//           ),
//         }}
//       />
//       <Stack.Screen name="QR-code  сканнер" component={ScanScreen} />
//     </Stack.Navigator>
//   );
// };

export default function CartScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
