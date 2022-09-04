import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryCardContainer: {
    flex: 1,
  },
  categoryImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,

    marginBottom: -60,
    zIndex: 1,
  },
  categoryNameContainer: {
    width: 124,
    height: 124,

    justifyContent: 'flex-end',

    backgroundColor: '#fff',

    borderRadius: 20,
    padding: 10,
  },
  categoryName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,

    color: '#000',
  },
});
