import React from 'react';
import { ImageHeart } from '../../../assets/icons';
import { styles } from './styles';
import { Image, Pressable, ToastAndroid } from 'react-native';
// import {
//   useCartScreenDispatch,
//   useHomeScreenDispatch,
// } from '../../redux/hooks';
// import { addProductToCart } from '../../screens/cart/slicer';
// import { incrementQuantity } from '../../screens/home/slicer';
// import ProductDto from '../../api/products/product.dto';

// type PlusProps = {
//   product: ProductDto;
// };

// export const AddProductToCart = ({ product }: PlusProps) => {
//   // const cartScreenDispatch = useCartScreenDispatch();
//   // const homeScreenDispatch = useHomeScreenDispatch();

//   return (
//     <TouchableOpacity
//       style={styles.addProductToCart}
//       // onPress={() => {
//       //   ToastAndroid.show('Товар в корзине!', ToastAndroid.SHORT);
//       //   cartScreenDispatch(addProductToCart({
//       //     ...product,
//       //     cartQuantity: 1,
//       //   }));
//       //   homeScreenDispatch(incrementQuantity(product.id));
//       // }}
//     >
//       <Image source={ImagePlus} style={styles.editQuantityImage} />
//     </TouchableOpacity>
//   );
// };

export const Heart = () => {
  return (
    <Pressable
      style={styles.heartImageContainer}
      onPress={() =>
        ToastAndroid.show(
          'Упс... Эта функция все еще в разработке 🙃',
          ToastAndroid.SHORT
        )
      }
    >
      <Image source={ImageHeart} style={styles.heartImage} />
    </Pressable>
  );
};
