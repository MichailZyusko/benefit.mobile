import React, {useEffect, useState} from 'react';
import {ImageSearch} from '../../../assets/icons';
import {onSearch} from './slicer';
import {styles} from './styles';
import {Image, Text, TextInput, View} from 'react-native';
import {useHomeScreenDispatch} from '../../redux/hooks';
import useDebounce from '../../hooks/useDebounce';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export const ListHeaderComponent = ({navigation}: {navigation: any}) => {
  return <SearchTextInput navigation={navigation} />;
};

const SearchTextInput = ({navigation}: {navigation: any}) => {
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
      <>
        <Image source={ImageSearch} style={styles.searchImage} />
        <Text> | </Text>
        <IoniconsIcon
          name={'ios-scan-outline'}
          size={25}
          color={'#828282'}
          onPress={() => navigation.navigate('QR-code  сканнер')}
        />
      </>
    </View>
  );
};
