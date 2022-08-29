import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Product} from '../../types';
import {StoreLogo} from '../StoreLogo';
import {QuantityEditor} from '../QuantityEditor';
import {ImageGeoTag} from '../../../assets/icons';

type Props = {
  product: Product;
};

export default function CartCard({product}: Props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: product.image}}
          style={styles.productImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <StoreLogo storeId={product.storeId} />
        <Text style={styles.nameText} numberOfLines={3}>
          {product.name}
        </Text>
        <QuantityEditor productId={product.id} />
      </View>
      <View style={styles.priceContainer}>
        <ImageBackground
          source={ImageGeoTag}
          style={styles.geoTagImage}
          resizeMode={'contain'}
        />
        <Text style={styles.priceText}>
          {+product.price * product.quantity} руб.
        </Text>
      </View>
    </View>
  );
}
