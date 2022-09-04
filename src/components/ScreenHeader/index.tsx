import {Text, View} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
};

export const ScreenHeader = ({title}: Props) => {
  const navigation = useNavigation();

  const iconPressHandler = () => {
    // @ts-ignore
    navigation.navigate('QR-code  сканнер');
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <IoniconsIcon
        style={styles.scannerIcon}
        name={'ios-scan-outline'}
        size={30}
        color={'#828282'}
        onPress={iconPressHandler}
      />
    </View>
  );
};
