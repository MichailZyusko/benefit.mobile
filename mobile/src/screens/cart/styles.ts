import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatList: {
    margin: 4,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 10,

    marginVertical: -4,
    paddingVertical: 16,
    paddingHorizontal: 24,

    backgroundColor: '#fff',
  },
  summaryText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#000',

    maxWidth: '50%',
  },
});
