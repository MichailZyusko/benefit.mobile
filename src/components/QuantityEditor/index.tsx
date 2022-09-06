import React from 'react';
import {useCartScreenDispatch, useHomeScreenSelector} from '../../redux/hooks';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../screens/cart/slicer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ImageMinus, ImagePlus} from '../../../assets/icons';
import ProductDto from '../ProductCard/dto';
import {selectHomeScreen} from '../../screens/home/slicer';

type Props = {
  product: ProductDto;
};

export const QuantityEditor = ({product}: Props) => {
  const cartScreenDispatch = useCartScreenDispatch();
  // const {products} = useHomeScreenSelector(selectHomeScreen);

  // const prdct = products.find(p => p.id === product.id);

  // console.log(prdct);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          cartScreenDispatch(removeProductFromCart(product));
          // product.quantity--;
        }}>
        <Image source={ImageMinus} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{product?.quantity}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          cartScreenDispatch(addProductToCart(product));
          // product.quantity++;
        }}>
        <Image source={ImagePlus} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
function useHomeScreeSelector(selectHomeScreen: (state: any) => any): {
  products: any;
} {
  throw new Error('Function not implemented.');
}
