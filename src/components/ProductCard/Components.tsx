import React from 'react';
import {ImageHeart, ImagePlus} from '../../../assets/icons';
import {styles} from './styles';
import {Image, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useCartScreenDispatch} from '../../redux/hooks';
import {addProductToCart} from '../../screens/cart/slicer';
import ProductDto from './dto';

type PlusProps = {
  product: ProductDto;
};

export const AddProductToCart = ({product}: PlusProps) => {
  const cartScreenDispatch = useCartScreenDispatch();

  return (
    <TouchableOpacity
      style={styles.addProductToCart}
      onPress={() => {
        ToastAndroid.show('Товар в корзине!', ToastAndroid.SHORT);
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
