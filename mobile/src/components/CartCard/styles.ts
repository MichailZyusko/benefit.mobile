import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 180,

    marginVertical: 4,
    marginHorizontal: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,

    backgroundColor: '#fff',
    borderRadius: 20,

    elevation: 5,
    shadowColor: 'rgba(160, 160, 160)',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productInfoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginHorizontal: 8,
  },
  nameText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 18,
    color: '#000',

    width: '100%',
  },
  priceContainer: {
    justifyContent: 'flex-end',
  },
  priceText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#000',
  },
  geoTagImage: {
    width: 30,
    height: 30,

    position: 'absolute',
    top: 0,
    right: 0,
  },
});
