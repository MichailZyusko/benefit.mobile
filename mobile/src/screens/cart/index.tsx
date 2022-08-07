import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Cart!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
