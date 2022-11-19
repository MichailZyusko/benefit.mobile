import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImage: {
    width: 420,
    height: 420,

    marginTop: -100,
  },
  errorText: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#303030',
    textAlign: 'center',

    marginHorizontal: 25,
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#9A9A9A',
    textAlign: 'center',

    marginHorizontal: 35,
  },
});
