/**
 * React Native 适配工具类
 * 以iPhone6为基准
 */

import {
  Dimensions,
  PixelRatio,
} from 'react-native';

// iPhone6 尺寸
const defaultDevice = {
  width: 375,
  height: 667
}

// 设备的宽
const {
    width: deviceWidth
} = Dimensions.get('window');

// 字体大小缩放比例(Android下可设置字体大小)
let fontScale = PixelRatio.getFontScale();

// 获取缩放比例
const scale = deviceWidth / defaultDevice.width;

/**
 * 适配text
 * @param {number} size
 * @returns {number}
 */
export const ScaleText = size => {
  size = Math.round(size * scale / fontScale);
  return size;
}

/**
 * 适配size
 * @param {number} size
 * @returns {number}
 */
export const ScaleSize = size => {
  size = Math.round(size * scale);
  return size;
}
