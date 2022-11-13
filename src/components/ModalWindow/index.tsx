import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { StoreLogo } from '../StoreLogo';
import { Heart } from '../ProductCard/Components';
import { removeProduct, selectModalWindow } from './slicer';
import {
  useModalWindowDispatch,
  useModalWindowSelector,
} from '../../redux/hooks';
import ProductDto from '../../api/products/product.dto';
import { nonImageURL } from '../../constants/general';

export default function ModalProductInfo() {
  const { product }: { product: ProductDto } =
    useModalWindowSelector(selectModalWindow);
  const [selectedOffer, setSelectedOffer] = useState(product?.bestOffer);
  const modalWindowDispatch = useModalWindowDispatch();

  console.log('product', JSON.stringify(product, null, 2));

  if (!product) {
    return null;
  }

  return (
    <View style={styles.modalContainer}>
      <Modal
        onBackButtonPress={() => modalWindowDispatch(removeProduct())}
        onBackdropPress={() => modalWindowDispatch(removeProduct())}
        onSwipeComplete={() => modalWindowDispatch(removeProduct())}
        propagateSwipe
        swipeDirection="down"
        isVisible={!!product}
        hideModalContentWhileAnimating
        animationInTiming={750}
        backdropTransitionInTiming={1000}
        animationOutTiming={750}
        backdropTransitionOutTiming={1000}
        style={styles.modelWindow}
      >
        <View style={styles.separator} />
        <View>
          <View style={styles.productContainer}>
            <StoreLogo
              product={product}
              style={styles.storoLogo}
              setSelectedOffer={setSelectedOffer}
            />
            <Heart />
            <ImageBackground
              source={{ uri: product.image ?? nonImageURL }}
              style={styles.productImage}
              resizeMode={'contain'}
            />
            <Text style={styles.nameText} numberOfLines={3}>
              {product.name}
            </Text>
            <Text style={styles.nameText} numberOfLines={3}>
              {product?.bestOffer
                ? `${selectedOffer?.price || product?.bestOffer?.price} Br`
                : 'Раскуплено'}
            </Text>
            <Text style={styles.nameText} numberOfLines={3}>
              {product?.bestOffer
                ? `Адрес: ${
                    selectedOffer?.store.address ||
                    product?.bestOffer?.store.address
                  }`
                : ''}
            </Text>
          </View>
          {/* <View style={styles.buttonsContainer}>
              <Pressable style={styles.addButton}>
                <Text style={styles.addText}>Добавить</Text>
              </Pressable>
              <QuantityEditor product={product} />
            </View> */}
        </View>
      </Modal>
    </View>
  );
}
