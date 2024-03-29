import React, { useCallback } from 'react';
import ProductCard from '../../components/ProductCard';

import { useHomeScreenSelector } from '../../redux/hooks';
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

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const { search } = useHomeScreenSelector(selectHomeScreen);

  const {
    isFetching,
    isError,
    data: products,
  } = useQuery(['products', search], () => getProducts({ search }));

  console.log([search, isFetching, isError, products?.length]);

  const keyExtractor = useCallback((item: ProductDto) => item.id, []);
  const renderItem = useCallback(
    ({ item }: { item: ProductDto }) => <ProductCard product={item} />,
    []
  );

  if (isError) {
    return <NetworkError />;
  }

  console.log(products?.length === 0);

  if (products?.length === 0) {
    return (
      <View style={styles.screenContainer}>
        {/* <SearchTextInput /> */}
        <ProductNotFound />
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <ListHeaderComponent />
      {products?.length === 0 && <ProductNotFound />}
      {isFetching ? (
        <ProductCardsLoaderList />
      ) : (
        <FlatList
          numColumns={2}
          data={products}
          // ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={null} // TODO: add footer
          ListEmptyComponent={null} // TODO: add empty state
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          // onEndReached={onEndReachedMemoized}
          onEndReachedThreshold={5}
        />
      )}
      <ModalProductInfo />
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
