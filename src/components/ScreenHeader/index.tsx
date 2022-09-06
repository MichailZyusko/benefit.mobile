import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderIcon from '../HeaderIcon';

type Props = {
  title: string;
  iconProps?: {
    name: string;
    screenName: string;
  };
};

export const ScreenHeader = ({title, iconProps}: Props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {iconProps && (
        <HeaderIcon name={iconProps.name} screenName={iconProps.screenName} />
      )}
    </View>
  );
};
