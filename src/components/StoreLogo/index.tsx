import React, { useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity } from 'react-native';
import ProductDto from '../../api/products/product.dto';
import { styles } from './styles';

type Props = {
  product: ProductDto;
  setSelectedOffer: (offer: any) => void;
  style?: any;
};

export const StoreLogo = ({ product, setSelectedOffer, style }: Props) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [offer, setOffer] = useState<any>(product.bestOffer);
  if (!product?.bestOffer?.store.franchise) {
    return null;
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
                  const myOffer = product.offers.find(
                    (_offer) => _offer.id === offer.id
                  );
                  ToastAndroid.show(
                    `Адресс: ${__offer.store.address}`,
                    ToastAndroid.SHORT
                  );
                  console.log('myOffer', myOffer);

                  setOffer(myOffer);
                  setIsExpand(false);
                  setSelectedOffer({
                    price: __offer.price / __offer.quantity / 100,
                    store: {
                      address: __offer.store.address,
                    },
                  });
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
