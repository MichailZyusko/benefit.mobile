import React from 'react';
// import {Product} from '../../types';
import {Heart, Plus, StoreLogo} from './Components';

import {textTruncate} from '../../utils';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  product: any;
};

export default function ProductCard({product}: Props) {
  const imageUrl = `https://img.infoprice.by/256/${product.GoodsId.toString().slice(
    -4,
  )}/${product.GoodsPhoto.split('.')[0]}/norm/${product.GoodsPhoto}`;
  const name = textTruncate(product.GoodsName, 40);

  // console.log(product.Offers.sort((a: any, b: any) => a.Price - b.Price));
  const bestPrice = Math.min(
    ...product.Offers.map(({Price}: {Price: number}) => Price),
  );
  const storeId = product.Offers.find(
    ({Price}: {Price: number}) => Price == bestPrice,
  ).ContractorId;

  return (
    <View style={styles.cardContainer}>
      <Heart />
      <Image source={{uri: imageUrl}} style={styles.productImage} />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{textTruncate(name, 40)}</Text>
        <StoreLogo storeId={storeId} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{bestPrice} Br</Text>
        <Plus />
      </View>
    </View>
  );
}
