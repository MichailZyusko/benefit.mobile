import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 60,

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    color: '#000000',

    marginLeft: -12,
  },
  scannerIcon: {
    position: 'absolute',
    right: 30,
  },
});
