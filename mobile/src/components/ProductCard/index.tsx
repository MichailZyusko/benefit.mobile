import React from 'react';
import {Product} from '../../types';
import {
  Card,
  Heart,
  Name,
  NameContainer,
  Plus,
  Price,
  PriceContainer,
  ProductImage,
  ShopImage,
} from './Components';

import {ImageHeart, ImagePlus, ImageGreenShop} from '../../../assets/icons';
import {textTruncate} from '../../utils';

type Props = {
  product: Product;
};

export default function ProductCard({product}: Props) {
  return (
    <Card>
      <Heart source={ImageHeart} />
      <ProductImage source={{uri: product?.image}} />
      <NameContainer>
        <Name>{textTruncate(product?.name, 50)}</Name>
        <ShopImage source={ImageGreenShop} />
      </NameContainer>
      <PriceContainer>
        <Price>{product?.price} Br</Price>
        <Plus source={ImagePlus} />
      </PriceContainer>
    </Card>
  );
}
