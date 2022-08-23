import React from 'react';
import {AddProductToCart, Heart} from './Components';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import ProductDto from './dto';
import {useCartScreenSelector} from '../../redux/hooks';
import {selectCartScreen} from '../../screens/cart/slicer';
import {Product} from '../../types';
import {StoreLogo} from '../StoreLogo';
import {QuantityEditor} from '../QuantityEditor';

type Props = {
  product: ProductDto;
};

export default function ProductCard({product}: Props) {
  const {products} = useCartScreenSelector(selectCartScreen);
  const quantity =
    products.find((p: Product) => p.id === product.id)?.quantity || 0;

  return (
    <View style={styles.cardContainer}>
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
          {quantity ? (
            <QuantityEditor productId={product.id} />
          ) : (
            <AddProductToCart product={product} />
          )}
        </View>
      </View>
    </View>
  );
}
