import React from 'react';
import { Image, Text, View } from 'react-native';

import { NetworkIssueImg } from '../../../assets/images';
import styles from './styles';

export default function NetworkError() {
  return (
    <View style={styles.screenContainer}>
      <Image source={NetworkIssueImg} style={styles.errorImage} />
      <Text style={styles.errorText}>Упс... Невозможно загрузить страницу</Text>
      <Text style={styles.tipsText}>
        Проверьте ваше соединение с интернетом
      </Text>
    </View>
  );
}
