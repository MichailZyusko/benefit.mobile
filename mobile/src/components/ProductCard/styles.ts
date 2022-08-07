import {StyleSheet} from 'react-native';
import {StoreBackgroundColor} from './constants';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    width: '45%',
    height: 310,
    margin: 4,
    padding: 10,

    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#e0e0e0',

    elevation: 5,
    shadowColor: 'rgba(160, 160, 160)',
    //shadow-offset: {width: 0, height: 2};
    //shadow-color: rgba(160, 160, 160, 0.15);
  },
  heartImage: {
    width: 30,
    height: 30,
  },
  heartImageContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
    zIndex: 1,

    padding: 7,
  },
  productImage: {
    width: '100%',
    height: '60%',
    borderRadius: 15,
    objectFit: 'scale-down',
    objectPosition: 'center',
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  nameText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 18,
    color: '#000',
  },
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  priceText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#000',
  },
  plusImage: {
    width: 16,
    height: 16,
  },
  plusButton: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#e3e3e3',
    borderRadius: 5,

    width: 24,
    height: 24,
  },
  plusContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: -7,
    padding: 7,
  },
});

export const storeLogoStyles = (storeId: string) =>
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

      elevation: 5,
      shadowColor: 'rgb(97, 151, 99)',
      backgroundColor: StoreBackgroundColor[storeId],

      marginTop: 5,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingRight: 10,

      borderRadius: 5,

      // //shadow-offset: {
      // //  width: '0px',
      // //  height: '2px',
      // //};
      // //shadow-color: rgb(97, 151, 99);
      // //shadow-opacity: 0.6;
      // //box-shadow: 0px 2px 10px rgba(97, 151, 99, 0.6);
    },
  });
