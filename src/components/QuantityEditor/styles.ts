import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#D093FF',
    borderRadius: 5,

    width: 30,
    height: 30,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40,
    color: '#000000',

    width: 40,
    height: 40,
    marginHorizontal: 16,

    borderRadius: 8,

    // FIXME: innerShadow is not supported on Android
    backgroundColor: '#FFFFFF',
    elevation: 1,
  },
  image: {
    width: 16,
    height: 16,
  },
});
