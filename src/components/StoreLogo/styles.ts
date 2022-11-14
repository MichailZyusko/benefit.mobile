import { StyleSheet } from 'react-native';
import { stores } from './constants';

export const styles = (storeFranchise: string, isExpand: boolean) =>
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

      backgroundColor: stores[storeFranchise]?.color,

      paddingVertical: isExpand ? 0 : 2,
      paddingHorizontal: isExpand ? 0 : 10,

      borderRadius: 5,
    },
    storeNameListItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      width: '100%',
      textAlign: 'center',
      borderBottomColor: '#FFF',
      borderBottomWidth: 2,

      // borderBottomEndRadius: 10,
      // borderBottomStartRadius: 10,

      backgroundColor: stores[storeFranchise]?.color,

      paddingVertical: 3,
      paddingHorizontal: 10,
    },
  });
