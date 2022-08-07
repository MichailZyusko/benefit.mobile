import React, {useCallback, useEffect} from 'react';
import ProductCard from '../../components/ProductCard';
import {useHomeScreenDispatch, useHomeScreenSelector} from '../../redux/hooks';
import {selectHomeScreen} from './slicer';
import {getProducts} from '../../services/products';
import {onEndReached} from './slicer';
import {ListHeaderComponent} from './Components';
import {Product} from '../../types';
import {FlatList, View} from 'react-native';

import {styles} from './styles';

export default function HomeScreen() {
  const {page, products, search} =
    useHomeScreenSelector(selectHomeScreen);
  const dispatch = useHomeScreenDispatch();

  // console.log(1111111, page, products.length, loading, search);

  useEffect(() => {
    (async () => {
      await getProducts(dispatch, page, search);
    })();
  }, [dispatch, page, search]);

  const onEndReachedMemoized = useCallback(
    () => dispatch(onEndReached()),
    [dispatch],
  );

  const keyExtractor = useCallback(
    (item: Product, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: Product}) => <ProductCard product={item} />,
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={products}
        ListHeaderComponent={<ListHeaderComponent />}
        ListFooterComponent={null} // TODO: add footer
        ListEmptyComponent={null} // TODO: add empty state
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReachedMemoized}
        onEndReachedThreshold={5}
      />
    </View>
  );
}
