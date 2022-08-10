import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useHomeScreenDispatch} from '../../redux/hooks';
import {onSearch} from '../home/slicer';

export const ScanScreen = ({navigation}: {navigation: any}) => {
  const [hasPermissions, setPermissions] = useState(false);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

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

const styles = StyleSheet.create({
  barcodeMask: {
    position: 'absolute',
    top: '40%',
    left: '15%',
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 10,
    width: '70%',
    height: 120,
  },
  instruction: {
    position: 'relative',
    top: -35,
    left: '10%',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
});
