import React from 'react';
import { AddProductToCart, Heart } from './Components';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useModalWindowDispatch } from '../../redux/hooks';
import { StoreLogo } from '../StoreLogo';
import { QuantityEditor } from '../QuantityEditor';
import { setProduct } from '../ModalWindow/slicer';
import ProductDto from '../../api/products/product.dto';
import { nonImageURL } from '../../constants/general';

type Props = {
  product: ProductDto;
};

export default function ProductCard({ product }: Props) {
  const modalWindowDispatch = useModalWindowDispatch();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => modalWindowDispatch(setProduct(product))}
    >
      <Heart />
      <StoreLogo product={product} style={styles.storeLogoContainer} />
      <ImageBackground
        source={{ uri: product.image ?? nonImageURL }}
        style={styles.productImage}
        resizeMode={'contain'}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.priceText}>
          {product?.bestOffer
            ? `${product?.bestOffer.price} Br`
            : `Раскуплено`
          }
        </Text>
        <Text style={styles.nameText} numberOfLines={2}>
          {product.name}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        {product?.bestOffer
          ?
            (
              <View style={styles.quantityEditorWrapper}>
              {product.cartQuantity ? (
                <QuantityEditor product={product} />
              ) : (
                <AddProductToCart product={product} />
              )}
              </View>
            )
          : (
            <Text style={styles.nameText}>
              Не доступен для заказа
            </Text>
          )}
      </View>
    </TouchableOpacity>
  );
}
