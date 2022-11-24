import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ImageSearch } from '../../../assets/icons';
import { onSearch, removeStoreFilter, setStoreFilter } from './slicer';
import { storeStyles, styles } from './styles';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { useHomeScreenDispatch } from '../../redux/hooks';
import useDebounce from '../../hooks/useDebounce';
import { Store } from '../../types/store';
import { useQuery } from '@tanstack/react-query';
import { getStores } from '../../api/stores';
import ContentLoader, { Rect } from 'react-content-loader/native';

export const ListHeaderComponent = () => {
  return (
    <>
      <SearchTextInput />
      <StoreCarousel />
      <Text style={styles.storeText}>Популярные товары</Text>
    </>
  );
};

const StoreCarouselLoader = () => {
  const StoreLoader = () => (
    <ContentLoader
      speed={2}
      width={100}
      height={100}
      style={styles.carouselItemLoader}
      backgroundColor="#E6E6E6"
      foregroundColor="#ecebeb"
    >
      {/* Product image*/}
      <Rect x="0" y="0" rx="15" ry="15" width="100" height="100" />
    </ContentLoader>
  );

  const renderItem = useCallback(() => <StoreLoader />, []);
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
    <>
      <Text style={styles.storeText}>Магазины</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

const StoreCard = ({ store }: { store: Store }) => {
  const dispatch = useHomeScreenDispatch();
  const [isToggled, setToggle] = useState<boolean>(false);

  return (
    <View style={storeStyles(isToggled, store.franchise).border}>
      <TouchableOpacity
        style={storeStyles(isToggled, store.franchise).store}
        onPress={() => {
          setToggle(!isToggled);

          ToastAndroid.show(`${store.address} 🏪`, ToastAndroid.SHORT);

          isToggled
            ? dispatch(removeStoreFilter(store.id))
            : dispatch(setStoreFilter(store.id));
        }}
      >
        <Text style={styles.storeName}>{store.franchise}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const StoreCarousel = () => {
  const {
    isFetching,
    isError,
    data: stores,
  } = useQuery(['stores'], () => getStores());

  const keyExtractor = useCallback((item: Store) => item.id, []);
  const renderItem = useCallback(
    ({ item }: { item: Store }) => <StoreCard store={item} />,
    []
  );

  if (isFetching) {
    return <StoreCarouselLoader />;
  }

  if (isError) {
    return null;
  }

  return (
    <>
      <Text style={styles.storeText}>Магазины</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        data={stores}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </>
  );
};

export const SearchTextInput = () => {
  const inputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<string>('');
  const dispatch = useHomeScreenDispatch();

  const handleChangeText = (text: string) => setSearch(text);
  const debouncedSearch = useDebounce<string>(search, 300);

  useEffect(() => {
    dispatch(onSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <TouchableOpacity
      style={styles.searchTextInputContainer}
      onPress={() => inputRef.current && inputRef.current.focus()}
    >
      <Image source={ImageSearch} style={styles.searchImage} />
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        value={search}
        placeholder={'Поиск'}
        placeholderTextColor={'#828282'}
        style={styles.searchTextInput}
      />
    </TouchableOpacity>
  );
};
