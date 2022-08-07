import React from 'react';
import {ImageHeart, ImagePlus} from '../../../assets/icons';
import {storeLogoStyles, styles} from './styles';
import {Image, Text, View} from 'react-native';
import {StoreNameMapper} from './constants';

export const Plus = () => {
  return (
    <View style={styles.plusContainer}>
      <View style={styles.plusButton}>
        <Image source={ImagePlus} style={styles.plusImage} />
      </View>
    </View>
  );
};

export const Heart = () => {
  return (
    <View style={styles.heartImageContainer}>
      <Image source={ImageHeart} style={styles.heartImage} />
    </View>
  );
};

export const StoreLogo = ({storeId}: {storeId: string}) => {
  return (
    <View style={storeLogoStyles(storeId).storeNameContainer}>
      <Text style={storeLogoStyles(storeId).storeNameText}>
        {StoreNameMapper[storeId]}
      </Text>
    </View>
  );
};
