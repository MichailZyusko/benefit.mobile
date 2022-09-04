import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {styles} from './styles';

export const ProductCardLoader = () => (
  <ContentLoader
    speed={2}
    width={'48%'}
    height={305}
    // viewBox="0 0 400 160"
    style={styles.cardContainer}
    // style={styles.cardContainer}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    {/* Product image*/}
    <Rect x="10" y="10" rx="15" ry="15" width="170" height="170" />
    {/* Product name */}
    <Rect x="10" y="185" rx="3" ry="3" width="170" height="10" />
    <Rect x="10" y="200" rx="3" ry="3" width="170" height="10" />
    {/* Store logo */}
    <Rect x="10" y="220" rx="8" ry="8" width="70" height="15" />
    {/* Price */}
    <Rect x="10" y="270" rx="10" ry="10" width="50" height="20" />
    {/* Plus */}
    <Rect x="160" y="270" rx="5" ry="5" width="24" height="24" />
  </ContentLoader>
);
