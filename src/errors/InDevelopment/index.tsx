import React from 'react';
import { Image, Text, View } from 'react-native';

import { InDevelopmentImg } from '../../../assets/images';
import styles from './styles';

export default function InDevelopmentError() {
  return (
    <View style={styles.screenContainer}>
      <Image source={InDevelopmentImg} style={styles.errorImage} />
      <Text style={styles.errorText}>Эта страница находиться в разработке</Text>
      <Text style={styles.tipsText}>
        Как только она будет готова, вы узнаете первым!
      </Text>
    </View>
  );
}
