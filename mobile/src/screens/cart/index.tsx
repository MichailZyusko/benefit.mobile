import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useCartScreenSelector} from '../../redux/hooks';
import {selectCartScreen} from './slicer';
import {styles} from './styles';
import {Product} from '../../types';
import ProductCard from '../../components/ProductCard';

export default function CartScreen() {
  const {products} = useCartScreenSelector(selectCartScreen);

  console.log(123124, products);

  const keyExtractor = useCallback(
    (item: Product, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: any}) => <ProductCard product={item} />,
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
