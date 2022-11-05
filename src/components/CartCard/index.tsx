import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { StoreLogo } from '../StoreLogo';
import { QuantityEditor } from '../QuantityEditor';
// import {ImageGeoTag} from '../../../assets/icons';
import { round } from '../../utils/roundNumber';
import ProductDto from '../ProductCard/dto';

type Props = {
  product: ProductDto;
};

export default function CartCard({ product }: Props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: product.image }}
          style={styles.productImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <StoreLogo storeId={product.storeId} />
        <Text style={styles.nameText} numberOfLines={3}>
          {product.name}
        </Text>
        <QuantityEditor product={product} />
      </View>
      <View style={styles.priceContainer}>
        {/* <ImageBackground
          source={ImageGeoTag}
          style={styles.geoTagImage}
          resizeMode={'contain'}
        /> */}
        <Text style={styles.priceText}>
          {round(+product.price * product.quantity)} руб.
        </Text>
      </View>
    </View>
  );
}
