import React from 'react';
import {Heart, Plus, StoreLogo} from './Components';

import {textTruncate} from '../../utils';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import ProductDto from './dto';

type Props = {
  product: ProductDto;
};

export default function ProductCard({product}: Props) {
  return (
    <View style={styles.cardContainer}>
      <Heart />
      <ImageBackground
        source={{uri: product.image}}
        style={styles.productImage}
        resizeMode={'contain'}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{textTruncate(product.name, 40)}</Text>
        <StoreLogo storeId={product.storeId} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{product.price} Br</Text>
        <Plus product={product} />
      </View>
    </View>
  );
}
