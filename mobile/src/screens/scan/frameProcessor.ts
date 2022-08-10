import type {Frame} from 'react-native-vision-camera';

/**
 * Scans QR codes.
 */
export function scanQRCodes(frame: Frame): string[] {
  'worklet';
  // @ts-ignore
  return __scanQRCodes(frame);
}
