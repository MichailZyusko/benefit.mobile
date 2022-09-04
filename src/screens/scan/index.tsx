import React, {useEffect, useState} from 'react';
import {Text, View, ToastAndroid, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useHomeScreenDispatch} from '../../redux/hooks';
import {onSearch} from '../home/slicer';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const ScanScreen = () => {
  const [hasPermissions, setPermissions] = useState(false);
  const {back: device} = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();
  const dispatch = useHomeScreenDispatch();

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    },
  );

  const barcode = barcodes[0]?.displayValue;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setPermissions(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    if (barcode) {
      ToastAndroid.show(barcode, 3e2);

      // @ts-ignore
      navigation.navigate('Главная');
      dispatch(onSearch(barcode));
    }
  }, [barcode, dispatch, navigation]);

  if (!hasPermissions) {
    return <Text>Permission Denied</Text>;
  }

  if (device == null) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Camera
        frameProcessor={frameProcessor}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <View style={styles.barcodeMask}>
        <Text style={styles.instruction}>Поместите свой код здесь</Text>
      </View>
    </>
  );
};
