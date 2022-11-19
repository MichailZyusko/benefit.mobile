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
    padding: 12,

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

    marginHorizontal: 50,
    marginVertical: 25,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
