import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatList: {
    margin: 4,
  },
  searchImage: {
    width: 24,
    height: 24,
  },
  searchTextInput: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#828282',

    width: '80%',
    height: 45,
  },
  searchTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 25,
    maxHeight: 40,
  },
});
