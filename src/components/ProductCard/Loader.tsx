import React, { useCallback } from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { FlatList } from 'react-native';
import { ListHeaderComponent } from '../../screens/home/Components';
import { styles } from './styles';

export const ProductCardLoader = () => (
  <ContentLoader
    speed={2}
    width={'48%'}
    height={270}
    style={styles.cardContainer}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Product image*/}
    <Rect x="10" y="10" rx="15" ry="15" width="165" height="165" />
    {/* Price */}
    <Rect x="10" y="185" rx="10" ry="10" width="90" height="25" />
    {/* Product name */}
    <Rect x="10" y="220" rx="3" ry="3" width="165" height="12" />
    <Rect x="10" y="240" rx="3" ry="3" width="165" height="12" />
  </ContentLoader>
);

export const ProductCardsLoaderList = () => {
  const renderItem = useCallback(() => <ProductCardLoader />, []);
  const keyExtractor = useCallback(({ id }: { id: string }) => id, []);
  const data = [
    { id: 'bbfb9ba8-083f-4642-a543-d0f0dd6d3ebf' },
    { id: 'a3a28e65-19d2-4f6b-8711-8942641c2923' },
    { id: '49e63ccd-2739-4526-b6ee-354f6e0ec3c8' },
    { id: 'a1e7c3dd-7a46-4438-b4f1-853e49c05aa1' },
    { id: '22271d22-3410-42f5-a9ee-48fb40d157fc' },
    { id: '55121aba-c843-4067-b4b3-4a392765ab24' },
  ];

  return (
    <FlatList
      numColumns={2}
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={5}
    />
  );
};
