import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelWindow: {
    flex: 1,
    marginTop: '30%',
    margin: 0,

    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
  },
  separator: {
    position: 'absolute',
    top: 0,

    backgroundColor: '#fff',
    borderRadius: 4,

    marginTop: -12,

    width: '25%',
    height: 4,
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginHorizontal: 25,
    marginVertical: 25,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  productNameContainer: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  productName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 22,
    color: '#000',

    marginTop: 5,
  },
  productVolume: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    lineHeight: 23,
    color: '#9A9A9A',

    marginTop: 5,
  },
  productDescription: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#303030',

    marginTop: 5,
  },
  storeAddress: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 23,
    color: '#9A9A9A',
  },
  storoLogo: {
    position: 'absolute',
    left: 7,
    top: 7,

    zIndex: 1,
  },
  nameText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    lineHeight: 20,
    color: '#000',

    marginTop: 12,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 25,
  },
  addButton: {
    backgroundColor: '#CF93FF',
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 16,
  },
  addText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    lineHeight: 20,
    color: '#fff',
  },
});
