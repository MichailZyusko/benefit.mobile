import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    width: '45%',
    height: 305,
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
    width: 170,
    height: 170,
    borderRadius: 15,

    marginVertical: 8,
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
  editQuantityImage: {
    width: 16,
    height: 16,
  },
  addProductToCart: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#e3e3e3',
    borderRadius: 5,

    width: '75%',
    height: 24,
  },
  storeLogoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  quantityEditorWrapper: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    marginVertical: 8,
  },
});
