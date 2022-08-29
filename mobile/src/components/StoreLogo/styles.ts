import {StyleSheet} from 'react-native';
import {stores} from './constants';

export const styles = (storeId: string) =>
  StyleSheet.create({
    storeNameText: {
      fontFamily: 'Roboto-Medium',
      fontSize: 12,
      lineHeight: 14,
      color: '#fff',
    },
    storeNameContainer: {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: stores[storeId]?.color,

      paddingVertical: 2,
      paddingHorizontal: 10,

      borderRadius: 5,
    },
  });
