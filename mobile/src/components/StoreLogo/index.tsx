import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {stores} from './constants';

type Props = {
  storeId: string;
  style?: any;
};

export const StoreLogo = ({storeId, style}: Props) => {
  return (
    <View style={[styles(storeId).storeNameContainer, style]}>
      <Text style={styles(storeId).storeNameText}>{stores[storeId]?.name}</Text>
    </View>
  );
};
