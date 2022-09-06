import {StyleSheet} from 'react-native';

export const styles = (expanded: boolean) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      marginVertical: 4,
      borderRadius: 12,

      backgroundColor: expanded ? '#fff' : '#CF93FF',
      elevation: 5,
    },
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: 20,
      lineHeight: 24,

      color: expanded ? '#000' : '#fff',

      marginBottom: expanded ? 12 : 0,
    },
    categoryText: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 20,

      color: '#000',

      marginLeft: 16,
    },
    categoryTextContainer: {
      paddingVertical: 12,
      marginBottom: 12,
    },
  });
