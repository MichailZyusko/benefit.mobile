import React from 'react';
import { AddProductToCart, Heart } from './Components';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useModalWindowDispatch } from '../../redux/hooks';
import { StoreLogo } from '../StoreLogo';
import { QuantityEditor } from '../QuantityEditor';
import { setProduct } from '../ModalWindow/slicer';
import ProductDto from '../../api/products/product.dto';

type Props = {
  product: ProductDto;
};

const nonImageURL = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png';

export default function ProductCard({ product }: Props) {
  const modalWindowDispatch = useModalWindowDispatch();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => modalWindowDispatch(setProduct(product))}
    >
      <Heart />
      <StoreLogo storeFranchise={product?.bestOffer?.storeFranchise} style={styles.storeLogoContainer} />
      <ImageBackground
        source={{ uri: product.image ?? nonImageURL}}
        // source={{ uri: nonImageURL}}
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
      {/* <View style={styles.priceContainer}>
        <View style={styles.quantityEditorWrapper}>
          {product?.quantity ? (
            <QuantityEditor product={product} />
          ) : (
            <AddProductToCart product={product} />
          )}
        </View>
      </View> */}
    </TouchableOpacity>
  );
}
