import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  storeFranchise: string | undefined;
  style?: any;
};

export const StoreLogo = ({ storeFranchise, style }: Props) => {
  if (!storeFranchise) return null;

  return (
    <View style={[styles(storeFranchise).storeNameContainer, style]}>
      <Text style={styles(storeFranchise).storeNameText}>{storeFranchise}</Text>
    </View>
  );
};
