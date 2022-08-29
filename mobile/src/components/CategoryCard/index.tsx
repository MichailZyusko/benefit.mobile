import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Category_L1} from '../../constants/categories';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  category: Category_L1;
};

export default function CategoryCard({category}: Props) {
  const navigation = useNavigation();

  const pressHandler = () => {
    // @ts-ignore
    navigation.navigate('Подктагории', {
      title: category.name,
      id: category.id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.categoryCardContainer}
      onPress={pressHandler}>
      <View style={styles.categoryImageContainer}>
        <Image
          source={category.img}
          resizeMode={'contain'}
          style={styles.categoryImage}
        />
      </View>
      <View style={styles.categoryNameContainer}>
        <Text style={styles.categoryName} numberOfLines={3}>
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
