import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { stores } from './constants';

type Props = {
  storeFranchise: string;
  style?: any;
};

export const StoreLogo = ({ storeFranchise, style }: Props) => {
  return (
    <View style={[styles(storeFranchise).storeNameContainer, style]}>
      <Text style={styles(storeFranchise).storeNameText}>{stores[storeFranchise]?.name}</Text>
    </View>
  );
};
