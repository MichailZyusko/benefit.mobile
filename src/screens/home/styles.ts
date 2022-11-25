import { StyleSheet } from 'react-native';
import { stores } from '../../components/StoreLogo/constants';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
  },
  searchImage: {
    width: 24,
    height: 24,
  },
  searchTextInput: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#828282',

    height: 45,
    paddingHorizontal: 16,
  },
  searchTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    marginVertical: 24,
    maxHeight: 40,
  },
  storeText: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: '#000000',

    marginLeft: 16,
  },
  carousel: {
    marginVertical: 8,
    minHeight: 110,
    maxHeight: 110,
  },
  carouselItemLoader: {
    marginHorizontal: 4,
  },
  scannerIcon: {
    position: 'absolute',
    right: 30,
  },
});

export const storeStyles = (isToggled: boolean, storeFranchise: string) =>
  StyleSheet.create({
    store: {
      justifyContent: 'center',
      alignItems: 'center',

      width: 100,
      height: 100,

      backgroundColor: stores[storeFranchise]?.backgroundColor,

      borderColor: '#f5f5f5',
      borderWidth: 2,
      borderRadius: 10,
    },
    storeName: {
      fontSize: 16,
      fontFamily: 'Roboto-Bold',
      color: stores[storeFranchise]?.color,
    },
    border: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 2,
      padding: 3,

      borderColor: isToggled
        ? stores[storeFranchise]?.backgroundColor
        : '#f5f5f5',
      borderWidth: 2,
      borderRadius: 10,
    },
  });
