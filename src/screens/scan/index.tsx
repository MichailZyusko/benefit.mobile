import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ToastAndroid,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { useModalWindowDispatch } from '../../redux/hooks';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { setProduct } from '../../components/ModalWindow/slicer';
import { useQuery } from '@tanstack/react-query';
import { getProductByBarcode } from '../../api/products';
import ProductNotFound from '../../errors/PoductNotFound';
import useThrottleValue from '../../hooks/useThrottle';

export const ScanScreen = () => {
  const [hasPermissions, setPermissions] = useState<boolean>(false);
  const { back: device } = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();
  const modalWindowDispatch = useModalWindowDispatch();

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.EAN_13, BarcodeFormat.EAN_8],
    {
      checkInverted: true,
    }
  );

  const barcode = barcodes[0]?.displayValue ?? '';
  const throtledBarcode = useThrottleValue<string>(barcode, 1000);

  const {
    isError,
    isFetching,
    data: product,
    error,
  } = useQuery(
    ['products', 'barcode', throtledBarcode],
    () => getProductByBarcode({ barcode: throtledBarcode }),
    {
      enabled: !!throtledBarcode,
    }
  );

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();

      setPermissions(status === 'authorized');
    })();
  }, []);

  if (isFetching) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return <ProductNotFound />;
  }

  throtledBarcode &&
    console.log([throtledBarcode, isFetching, isError, product, error]);

  if (product) {
    ToastAndroid.show(`Товар успешно найден: ${barcode}`, ToastAndroid.SHORT);

    // @ts-ignore
    modalWindowDispatch(setProduct(product));
    navigation.navigate('Главная');
  }

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
        isActive={!isFetching}
      />
      <View style={styles.barcodeMask}>
        <Text style={styles.instruction}>Поместите свой код здесь</Text>
      </View>
    </>
  );
};
