import React, {useEffect, useRef, useState} from 'react';
import {Text, View, ToastAndroid, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {useModalWindowDispatch} from '../../redux/hooks';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {getProsuctsByBarcode} from '../../services/products';
import {setProduct} from '../../components/ModalWindow/slicer';
import ProductDto from '../../components/ProductCard/dto';

export const ScanScreen = () => {
  const [hasPermissions, setPermissions] = useState<boolean>(false);
  const {back: device} = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();
  const modalWindowDispatch = useModalWindowDispatch();

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {checkInverted: true},
  );

  const barcode = barcodes[0]?.displayValue;
  let product = useRef<ProductDto | null>(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setPermissions(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (barcode) {
        ToastAndroid.show(barcode, ToastAndroid.SHORT);
        product.current = await getProsuctsByBarcode(barcode);

        if (product) {
          // @ts-ignore
          navigation.navigate('Главная');
          modalWindowDispatch(setProduct(product.current));
        }
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
        isActive={!product.current}
      />
      <View style={styles.barcodeMask}>
        <Text style={styles.instruction}>Поместите свой код здесь</Text>
      </View>
    </>
  );
};
