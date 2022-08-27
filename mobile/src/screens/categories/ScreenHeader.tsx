import {StyleSheet, Text, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const ScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Категории</Text>
      <IoniconsIcon
        style={styles.scannerIcon}
        name={'ios-scan-outline'}
        size={30}
        color={'#828282'}
        onPress={() => navigation.navigate('QR-code  сканнер')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,

    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    color: '#000000',

    marginRight: 20,
  },
  scannerIcon: {
    position: 'absolute',
    right: 30,
  },
});
