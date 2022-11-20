import React from 'react';
import { Image, ImageRequireSource, View } from 'react-native';
import { Text } from 'react-native-svg';

type Props = {
  image: ImageRequireSource;
  title: string;
  description: string;
};

function Frame({ title, description, image }: Props) {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

export default Frame;
