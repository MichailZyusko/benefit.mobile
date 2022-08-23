import React from 'react';
import {ImageHeart, ImagePlus} from '../../../assets/icons';
import {styles} from './styles';
import {Image, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useCartScreenDispatch, useProductCardDispatch} from '../../redux/hooks';
import {addProductToCart} from '../../screens/cart/slicer';
import ProductDto from './dto';
import {incrementQuantity} from './slicer';

type PlusProps = {
  product: ProductDto;
};

export const AddProductToCart = ({product}: PlusProps) => {
  const cartScreenDispatch = useCartScreenDispatch();
  const productCardDispatch = useProductCardDispatch();

  return (
    <TouchableOpacity
      style={styles.addProductToCart}
      onPress={() => {
        ToastAndroid.show('Товар в корзине!', 3e3);
        productCardDispatch(incrementQuantity());
        cartScreenDispatch(addProductToCart({...product, quantity: 1}));
      }}>
      <Image source={ImagePlus} style={styles.editQuantityImage} />
    </TouchableOpacity>
  );
};

export const Heart = () => {
  return (
    <View style={styles.heartImageContainer}>
      <Image source={ImageHeart} style={styles.heartImage} />
    </View>
  );
};
