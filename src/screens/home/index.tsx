import React, { useCallback } from 'react';
import ProductCard from '../../components/ProductCard';

import {
  useHomeScreenSelector,
  useModalWindowSelector,
} from '../../redux/hooks';
import { selectHomeScreen } from './slicer';
import { ListHeaderComponent } from './Components';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { ProductCardsLoaderList } from '../../components/ProductCard/Loader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScanScreen } from '../scan';
import { ScreenHeader } from '../../components/ScreenHeader';
import ModalProductInfo from '../../components/ModalWindow';
import { getProducts } from '../../api/products';
import { useQuery } from '@tanstack/react-query';
import ProductDto from '../../api/products/product.dto';
import { NetworkError } from '../../errors';
import ProductNotFound from '../../errors/PoductNotFound';
import { selectModalWindow } from '../../components/ModalWindow/slicer';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const { search, storeIds } = useHomeScreenSelector(selectHomeScreen);
  const { product } = useModalWindowSelector(selectModalWindow);

  const {
    isFetching,
    isError,
    data: products,
  } = useQuery(['products', search, storeIds], () =>
    getProducts({ search, storeIds })
  );

  const keyExtractor = useCallback((item: ProductDto) => item.id, []);
  const renderItem = useCallback(
    ({ item }: { item: ProductDto }) => <ProductCard product={item} />,
    []
  );

  if (isError) {
    return <NetworkError />;
  }

  if (products?.length === 0) {
    return (
      <View style={styles.screenContainer}>
        <ProductNotFound />
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        numColumns={2}
        data={isFetching ? [] : products}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={null} // TODO: add footer
        ListEmptyComponent={isFetching ? <ProductCardsLoaderList /> : null} // TODO: add empty state
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // onEndReached={onEndReachedMemoized}
        onEndReachedThreshold={5}
      />
      {product && <ModalProductInfo />}
    </View>
  );
}

export const HomeScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Главная"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <ScreenHeader
              title="Главная"
              iconProps={{
                name: 'ios-scan-outline',
                screenName: 'QR-code сканнер',
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="QR-code сканнер" component={ScanScreen} />
    </Stack.Navigator>
  );
};
