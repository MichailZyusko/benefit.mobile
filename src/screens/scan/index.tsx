import React, {useEffect, useState} from 'react';
import {Text, View, ToastAndroid, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useModalWindowDispatch} from '../../redux/hooks';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../types';
import {getProsuctsByBarcode} from '../../services/products';
import {setProduct} from '../../components/ModalWindow/slicer';

export const ScanScreen = () => {
  const [hasPermissions, setPermissions] = useState(false);
  const {back: device} = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();
  const modalWindowDispatch = useModalWindowDispatch();

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    },
  );

  let barcode = barcodes[0]?.displayValue;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setPermissions(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (barcode) {
        ToastAndroid.show(barcode, 3e2);
        const product: Product = await getProsuctsByBarcode(barcode);

        // @ts-ignore
        navigation.navigate('Главная');
        modalWindowDispatch(setProduct(product));
      }
    })();
  }, [barcode, navigation, modalWindowDispatch]);

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
        isActive
      />
      <View style={styles.barcodeMask}>
        <Text style={styles.instruction}>Поместите свой код здесь</Text>
      </View>
    </>
  );
};
