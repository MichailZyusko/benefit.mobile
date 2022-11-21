import { StyleSheet } from 'react-native';
import { h2, text } from '../../../../styles/typogrpahy';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 67,
  },
  imageContainer: {
    height: 256,
    width: 256,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  header: {
    ...h2,
    marginTop: 70,
  },
  description: {
    ...text,
    marginTop: 10,
  },
});

export default styles;
