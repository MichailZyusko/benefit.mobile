import {StyleSheet} from 'react-native';

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
  },
});

export const storeStyles = (isToggled: boolean) =>
  StyleSheet.create({
    store: {
      justifyContent: 'center',
      alignItems: 'center',

      marginHorizontal: 8,
      width: 100,
      height: 100,

      backgroundColor: isToggled ? '#000000' : '#D9D9D9',
      borderRadius: 10,
    },
  });
