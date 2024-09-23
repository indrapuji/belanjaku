import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const isIphone = Platform.OS === 'ios';
export const hasNotch = DeviceInfo.hasNotch();
export const isAndroid = Platform.OS === 'android';
export const iphoneHasNotch = isIphone && hasNotch;
export const deviceNumber = DeviceInfo.getVersion;
export const brand = DeviceInfo.getBrand();
