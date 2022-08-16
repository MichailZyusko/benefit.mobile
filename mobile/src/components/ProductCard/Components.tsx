import React from 'react';
import {ImageHeart, ImagePlus} from '../../../assets/icons';
import {storeLogoStyles, styles} from './styles';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {StoreNameMapper} from './constants';
import {useCartScreenDispatch} from '../../redux/hooks';
import {addProductToCart} from '../../screens/cart/slicer';
import ProductDto from './dto';

export const Plus = ({product}: {product: ProductDto}) => {
  const dispatch = useCartScreenDispatch();

  return (
    <TouchableOpacity
      style={styles.plusContainer}
      onPress={() => {
        ToastAndroid.show('Товар в корзине!', 3e3);
        dispatch(addProductToCart(product));
      }}>
      <View style={styles.plusButton}>
        <Image source={ImagePlus} style={styles.plusImage} />
      </View>
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

export const StoreLogo = ({storeId}: {storeId: string}) => {
  return (
    <View style={storeLogoStyles(storeId).storeNameContainer}>
      <Text style={storeLogoStyles(storeId).storeNameText}>
        {StoreNameMapper[storeId]}
      </Text>
    </View>
  );
};
