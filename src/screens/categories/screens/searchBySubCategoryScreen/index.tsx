import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {getProductsByCategory} from '../../../../api/products';
import ModalProductInfo from '../../../../components/ModalWindow';
import ProductCard from '../../../../components/ProductCard';
import ProductDto from '../../../../components/ProductCard/dto';

type Props = {
  route: any;
};

export function SearchBySubCategoryScreen({route}: Props) {
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();
  const {title, categoryId} = route.params ?? {};

  useEffect(() => {
    if (title) {
      navigation.setOptions({
        title,
      });
    }
  }, [navigation, title]);

  useEffect(() => {
    (async () => {
      console.log({categoryId});

      const productsByCategory = await getProductsByCategory({categoryId});

      setProducts(productsByCategory);
    })();
  }, [categoryId]);

  const keyExtractor = useCallback(
    (_item: ProductDto, index: number) => index.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: any}) => <ProductCard product={item} />,
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // onEndReached={onEndReachedMemoized}
        onEndReachedThreshold={5}
      />
      <ModalProductInfo />
    </View>
  );

  // const {page, products, search, loading, storeIds, categoryId} =
  //   useHomeScreenSelector(selectHomeScreen);
  // const dispatch = useHomeScreenDispatch();

  // useEffect(() => {
  //   (async () => {
  //     await getProducts(dispatch, page, search, storeIds, categoryId);
  //   })();
  // }, [dispatch, page, search, storeIds, categoryId]);

  // const onEndReachedMemoized = useCallback(
  //   () => dispatch(onEndReached()),
  //   [dispatch],
  // );

  // const renderLoader = useCallback(() => <ProductCardLoader />, []);

  // return (
  //   <View style={styles.screenContainer}>
  //     <FlatList
  //       numColumns={2}
  //       data={loading ? new Array(15).fill(1) : products}
  //       ListHeaderComponent={ListHeaderComponent}
  //       ListFooterComponent={null} // TODO: add footer
  //       ListEmptyComponent={null} // TODO: add empty state
  //       renderItem={loading ? renderLoader : renderItem}
  //       keyExtractor={keyExtractor}
  //       onEndReached={onEndReachedMemoized}
  //       onEndReachedThreshold={5}
  //     />
  //     <ModalProductInfo />
  //   </View>
  // );
}
