import React from 'react';
import {useCartScreenDispatch, useCartScreenSelector} from '../../redux/hooks';
import {
  decrementProductQuantity,
  incrementProductQuantity,
  selectCartScreen,
} from '../../screens/cart/slicer';
import {Product} from '../../types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ImageMinus, ImagePlus} from '../../../assets/icons';

type Props = {
  productId: number;
};

export const QuantityEditor = ({productId}: Props) => {
  const cartScreenDispatch = useCartScreenDispatch();
  const {products} = useCartScreenSelector(selectCartScreen);

  const quantity = products.find((p: Product) => p.id === productId)?.quantity;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => cartScreenDispatch(decrementProductQuantity(productId))}>
        <Image source={ImageMinus} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{quantity}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => cartScreenDispatch(incrementProductQuantity(productId))}>
        <Image source={ImagePlus} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
