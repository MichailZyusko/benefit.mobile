import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ImageSearch } from '../../../assets/icons';
import { onSearch, removeStoreFilter, setStoreFilter } from './slicer';
import { storeStyles, styles } from './styles';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useHomeScreenDispatch } from '../../redux/hooks';
import useDebounce from '../../hooks/useDebounce';
import { Store, stores } from '../../constants/stores';

export const ListHeaderComponent = () => {
  return (
    <>
      <SearchTextInput />
      <Text style={styles.storeText}>Магазины</Text>
      <StoreCarousel />
      <Text style={styles.storeText}>Популярные товары</Text>
    </>
  );
};

const StoreCard = ({ store }: { store: Store }) => {
  const dispatch = useHomeScreenDispatch();
  const [isToggled, setToggle] = useState(false);

  return (
    <TouchableOpacity
      style={storeStyles(isToggled).store}
      onPress={() => {
        setToggle(!isToggled);

        isToggled
          ? dispatch(removeStoreFilter(store.id))
          : dispatch(setStoreFilter(store.id));
      }}
    >
      <Text>{store.name}</Text>
    </TouchableOpacity>
  );
};

const StoreCarousel = () => {
  const keyExtractor = useCallback(
    (item: any, index: number) => index.toString(),
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: Store }) => <StoreCard store={item} />,
    []
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
      data={stores}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

const SearchTextInput = () => {
  const inputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');
  const dispatch = useHomeScreenDispatch();

  const handleChangeText = (text: string) => setSearch(text);
  const debouncedSearch = useDebounce<string>(search, 500);

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
