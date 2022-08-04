import React, {useCallback, useEffect} from 'react';
import ProductCard from '../../components/ProductCard';
import {useHomeScreenDispatch, useHomeScreenSelector} from '../../redux/hooks';
import {selectHomeScreen} from './slicer';
import {getProducts} from '../../services/products';
import {onEndReached} from './slicer';
import {FlatList} from './Components';
import {Product} from '../../types';

export default function HomeScreen() {
  const {page, products} = useHomeScreenSelector(selectHomeScreen);
  const dispatch = useHomeScreenDispatch();

  useEffect(() => {
    (async () => {
      await getProducts(dispatch, page);
    })();
  }, [dispatch, page]);

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
    <FlatList
      numColumns={2}
      data={products}
      ListHeaderComponent={null} // TODO: add header
      ListFooterComponent={null} // TODO: add footer
      ListEmptyComponent={null} // TODO: add empty state
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReachedMemoized}
      onEndReachedThreshold={5}
    />
  );
}
