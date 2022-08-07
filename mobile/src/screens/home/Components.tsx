import React, {useEffect, useState} from 'react';
import {ImageSearch} from '../../../assets/icons';
import {onSearch} from './slicer';
import {styles} from './styles';
import {Image, TextInput, View} from 'react-native';
import {useHomeScreenDispatch} from '../../redux/hooks';
import useDebounce from '../../hooks/useDebounce';

export const ListHeaderComponent = () => {
  return <SearchTextInput />;
};

const SearchTextInput = () => {
  const [search, setSearch] = useState('');
  const dispatch = useHomeScreenDispatch();

  const handleChangeText = (text: string) => setSearch(text);
  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    dispatch(onSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <View style={styles.searchTextInputContainer}>
      <TextInput
        onChangeText={handleChangeText}
        value={search}
        placeholder={'Поиск'}
        placeholderTextColor={'#828282'}
        style={styles.searchTextInput}
      />
      <Image source={ImageSearch} style={styles.searchImage} />
    </View>
  );
};
