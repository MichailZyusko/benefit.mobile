import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { ProductNotFoundImg } from '../../../assets/images';
import { useHomeScreenDispatch } from '../../redux/hooks';
import { onSearch } from '../../screens/home/slicer';
import styles from './styles';

export default function ProductNotFoundError() {
  const dispatch = useHomeScreenDispatch();
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('Главная');
    dispatch(onSearch(''));
  };

  return (
    <View style={styles.screenContainer}>
      <Image source={ProductNotFoundImg} style={styles.errorImage} />
      <Text style={styles.errorText}>Упс... Невозможно найти такой товар</Text>
      <Text style={styles.tipsText}>
        Видимо, такого товара пока еще нет в нашей базе
      </Text>
      <Text style={styles.backText} onPress={onPressHandler}>
        Назад к продуктам
      </Text>
    </View>
  );
}
