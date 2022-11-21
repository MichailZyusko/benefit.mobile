import { StyleSheet } from 'react-native';

export const DOT = 8;
export const DOT_MARGIN = 10;

const styles = StyleSheet.create({
  dashContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: DOT,
    height: DOT,
    marginLeft: DOT_MARGIN,
    backgroundColor: '#9A9A9A',
    borderRadius: DOT / 2,
  },
});

export default styles;
