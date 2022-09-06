import React from 'react';
import {AddProductToCart, Heart} from './Components';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import ProductDto from './dto';
import {useModalWindowDispatch} from '../../redux/hooks';
import {StoreLogo} from '../StoreLogo';
import {QuantityEditor} from '../QuantityEditor';
import {setProduct} from '../ModalWindow/slicer';

type Props = {
  product: ProductDto;
};

export default function ProductCard({product}: Props) {
  const modalWindowDispatch = useModalWindowDispatch();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => modalWindowDispatch(setProduct(product))}>
      <Heart />
      <StoreLogo storeId={product.storeId} style={styles.storeLogoContainer} />
      <ImageBackground
        source={{uri: product.image}}
        style={styles.productImage}
        resizeMode={'contain'}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.priceText}>{product.price} Br</Text>
        <Text style={styles.nameText} numberOfLines={2}>
          {product.name}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.quantityEditorWrapper}>
          {product?.quantity ? (
            <QuantityEditor product={product} />
          ) : (
            <AddProductToCart product={product} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
