import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { StoreLogo } from '../StoreLogo';
import { QuantityEditor } from '../QuantityEditor';
// import {ImageGeoTag} from '../../../assets/icons';
import { round } from '../../utils/roundNumber';
import ProductDto from '../../api/products/product.dto';
import { nonImageURL } from '../../constants/general';

type Props = {
  product: ProductDto;
};

export default function CartCard({ product }: Props) {
  if (!product.bestOffer) return null;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: product.image ?? nonImageURL }}
          style={styles.productImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <StoreLogo storeFranchise={product.bestOffer?.storeFranchise} />
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
          {round(+product.bestOffer.price * product.cartQuantity)} руб.
        </Text>
      </View>
    </View>
  );
}
