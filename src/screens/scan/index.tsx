import React, { useEffect, useRef, useState } from 'react';
import { Text, View, ToastAndroid, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { useModalWindowDispatch } from '../../redux/hooks';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { setProduct } from '../../components/ModalWindow/slicer';
import { useQuery } from '@tanstack/react-query'
import { getProductByBarcode } from '../../api/products';

export const ScanScreen = () => {
  const [hasPermissions, setPermissions] = useState<boolean>(false);
  const { back: device } = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();
  const modalWindowDispatch = useModalWindowDispatch();

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    { checkInverted: true }
  );

  const barcode = barcodes[0]?.displayValue;

  const { isLoading, isError, data: product, error } = useQuery(
    ['products', barcode],
    () => getProductByBarcode({ barcode }),
    { enabled: !!barcode }
  );

  if (product) {
    ToastAndroid.show(`Товар успешно найден: ${barcode}`, ToastAndroid.SHORT);

    // @ts-ignore
    modalWindowDispatch(setProduct(product));
    navigation.navigate('Главная');
  }

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setPermissions(status === 'authorized');
    })();
  }, []);

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
