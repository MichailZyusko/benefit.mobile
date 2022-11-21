import React from 'react';
import { Image, ImageRequireSource, View, Text } from 'react-native';
import styles from './styles';

type Props = {
  image: ImageRequireSource;
  title: string;
  description: string;
};

function Frame({ title, description, image }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default Frame;
