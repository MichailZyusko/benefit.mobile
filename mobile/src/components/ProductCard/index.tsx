import React from 'react';
// import {Product} from '../../types';
import {Heart, Plus, StoreLogo} from './Components';

import {textTruncate} from '../../utils';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  product: any;
};

export default function ProductCard({product}: Props) {
  const offers = [...product.Offers];
  const imageUrl = `https://img.infoprice.by/256/${product.GoodsId.toString().slice(
    -4,
  )}/${product.GoodsPhoto.split('.')[0]}/norm/${product.GoodsPhoto}`;
  const name = textTruncate(product.GoodsName, 40);
  const bestOffer = offers.sort((a: any, b: any) => a.Price - b.Price)[0];

  return (
    <View style={styles.cardContainer}>
      <Heart />
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.productImage}
        resizeMode={'contain'}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{textTruncate(name, 40)}</Text>
        <StoreLogo storeId={bestOffer.ContractorId} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{bestOffer.Price} Br</Text>
        <Plus />
      </View>
    </View>
  );
}
