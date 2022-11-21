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
    backgroundColor: 'red',
    borderRadius: DOT / 2,
  },
});

export default styles;
