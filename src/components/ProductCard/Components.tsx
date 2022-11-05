import React from 'react';
import { ImageHeart, ImagePlus } from '../../../assets/icons';
import { styles } from './styles';
import { Image, ToastAndroid, TouchableOpacity, View } from 'react-native';
import {
  useCartScreenDispatch,
  useHomeScreenDispatch,
} from '../../redux/hooks';
import { addProductToCart } from '../../screens/cart/slicer';
import { incrementQuantity } from '../../screens/home/slicer';
import ProductDto from '../../api/products/product.dto';

type PlusProps = {
  product: ProductDto;
};

export const AddProductToCart = ({ product }: PlusProps) => {
  const cartScreenDispatch = useCartScreenDispatch();
  const homeScreenDispatch = useHomeScreenDispatch();

  return (
    <TouchableOpacity
      style={styles.addProductToCart}
      onPress={() => {
        ToastAndroid.show('Товар в корзине!', ToastAndroid.SHORT);
        cartScreenDispatch(addProductToCart({
          ...product,
          cartQuantity: 1,
        }));
        homeScreenDispatch(incrementQuantity(product.id));
      }}
    >
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
