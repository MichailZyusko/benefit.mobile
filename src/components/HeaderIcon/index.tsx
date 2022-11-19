import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  name: string;
  screenName: string;
};

export default function HeaderIcon({ name, screenName }: Props) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(screenName);
  };

  return (
    <IoniconsIcon
      style={styles.scannerIcon}
      name={name}
      size={30}
      color={'#828282'}
      onPress={onPressHandler}
    />
  );
}

const styles = StyleSheet.create({
  scannerIcon: {
    position: 'absolute',
    right: 30,
  },
});
