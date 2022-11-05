import React from 'react';
import {
  useCartScreenDispatch,
  useHomeScreenDispatch,
  useModalWindowDispatch,
} from '../../redux/hooks';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../screens/cart/slicer';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ImageMinus, ImagePlus } from '../../../assets/icons';
import {
  decrementQuantity,
  incrementQuantity,
} from '../../screens/home/slicer';
import ProductDto from '../../api/products/product.dto';
// import {
//   decrementQuantityModal,
//   incrementQuantityModal,
// } from '../ModalWindow/slicer';

type Props = {
  product: ProductDto;
};

export const QuantityEditor = ({ product }: Props) => {
  const cartScreenDispatch = useCartScreenDispatch();
  const homeScreenDispatch = useHomeScreenDispatch();
  const modalWindowDispatch = useModalWindowDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          cartScreenDispatch(removeProductFromCart(product));
          homeScreenDispatch(decrementQuantity(product.id));
          modalWindowDispatch(decrementQuantityModal());
        }}
      >
        <Image source={ImageMinus} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{product?.quantity}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          cartScreenDispatch(addProductToCart(product));
          homeScreenDispatch(incrementQuantity(product.id));
          modalWindowDispatch(incrementQuantityModal());
        }}
      >
        <Image source={ImagePlus} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
