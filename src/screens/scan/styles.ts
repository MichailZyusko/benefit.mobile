import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  barcodeMask: {
    position: 'absolute',
    top: '40%',
    left: '15%',
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 10,
    width: '70%',
    height: 120,
  },
  instruction: {
    position: 'relative',
    top: -35,
    left: '10%',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
