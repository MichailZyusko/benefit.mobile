import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatList: {
    margin: 12,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 20,

    marginVertical: -12,
    paddingVertical: 16,
    paddingHorizontal: 24,

    backgroundColor: '#fff',
  },
  summaryText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#000',

    marginBottom: 8,

    maxWidth: '50%',
  },
});
