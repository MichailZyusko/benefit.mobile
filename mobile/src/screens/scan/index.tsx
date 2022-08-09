import React from 'react';
import {StyleSheet, Text} from 'react-native';
import 'react-native-reanimated';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import type {Frame} from 'react-native-vision-camera';

export function scanQRCodes(frame: Frame): string[] {
  'worklet';
  return __scanQRCodes(frame);
}

export const ScanScreen = () => {
  // const newCameraPermission = await Camera.requestCameraPermission();

  // if (newCameraPermission !== 'authorized') {
  //   return <Text>Permission Denied</Text>;
  // }
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const qrCodes = scanQRCodes(frame);
    console.log(`QR Codes in Frame: ${qrCodes}`);
  }, []);

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null) {
    return <Text>Loading...</Text>;
  }

  return (
    <Camera
      frameProcessor={frameProcessor}
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  );
};