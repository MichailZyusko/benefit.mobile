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
} from './Components';

import {textTruncate} from '../../utils';
import StoreLogo from './StoreLogo';

type Props = {
  product: Product;
};

export default function ProductCard({product}: Props) {
  return (
    <Card>
      <Heart.Component />
      <ProductImage source={{uri: product?.image}} />
      <NameContainer>
        <Name>{textTruncate(product?.name, 40)}</Name>
        <StoreLogo storeName={'Green'} />
      </NameContainer>
      <PriceContainer>
        <Price>{product?.price} Br</Price>
        <Plus.Component />
      </PriceContainer>
    </Card>
  );
}
