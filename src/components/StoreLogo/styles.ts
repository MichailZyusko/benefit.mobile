import { StyleSheet } from 'react-native';
import { stores } from './constants';

export const styles = (storeFranchise: string, isExpand: boolean) =>
  StyleSheet.create({
    storeNameText: {
      fontFamily: 'Roboto-Medium',
      fontSize: 14,
      lineHeight: 14,
      color: stores[storeFranchise]?.color,
    },
    storeNameContainer: {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: stores[storeFranchise]?.backgroundColor,

      paddingVertical: isExpand ? 0 : 4,
      paddingHorizontal: isExpand ? 0 : 12,

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

      backgroundColor: stores[storeFranchise]?.backgroundColor,

      paddingVertical: 3,
      paddingHorizontal: 10,
    },
  });
