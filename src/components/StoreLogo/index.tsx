import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ProductDto from '../../api/products/product.dto';
import { styles } from './styles';

type Props = {
  product: ProductDto;
  setSelectedOffer: (offer: any) => void;
  style?: any;
  viewOnly: boolean;
};

export const StoreLogo = ({
  product,
  setSelectedOffer,
  style,
  viewOnly = true,
}: Props) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [offer, setOffer] = useState<any>(product.bestOffer);

  if (!product?.bestOffer?.store.franchise) {
    return null;
  }

  if (viewOnly) {
    return (
      <View
        style={[
          styles(offer.store.franchise, isExpand).storeNameContainer,
          style,
        ]}
      >
        <Text style={styles(offer.store.franchise, isExpand).storeNameText}>
          {offer.store.franchise}
        </Text>
      </View>
    );
  }

  return (
    <>
      {isExpand ? (
        <TouchableOpacity
          style={[
            styles(product?.bestOffer?.store.franchise, isExpand)
              .storeNameContainer,
            style,
          ]}
        >
          {product.offers.map((__offer) => {
            return (
              <TouchableOpacity
                key={__offer.id}
                onPress={() => {
                  setSelectedOffer({
                    price: __offer.price / __offer.quantity / 100,
                    store: {
                      address: __offer.store.address,
                    },
                  });
                  setOffer(__offer);
                  setIsExpand(false);
                }}
                style={
                  styles(__offer.store.franchise, isExpand).storeNameListItem
                }
              >
                <Text
                  style={
                    styles(__offer.store.franchise, isExpand).storeNameText
                  }
                >
                  {__offer.store.franchise}
                </Text>
              </TouchableOpacity>
            );
          })}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setIsExpand(true)}
          style={[
            styles(offer.store.franchise, isExpand).storeNameContainer,
            style,
          ]}
        >
          <Text style={styles(offer.store.franchise, isExpand).storeNameText}>
            {offer.store.franchise}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
