/**
 * React Native 适配工具类
 * 以iPhone6为基准
 */

import {
  Dimensions,
  PixelRatio,
} from 'react-native';

// iPhone6 dp尺寸
const defaultDevice = {
  width: 750,
  height: 1334
}

// 设备的宽
const {
    width: deviceWidth
} = Dimensions.get('window');

// 字体大小缩放比例(Android下可设置字体大小)
let fontScale = PixelRatio.getFontScale();

// iPhone6的像素密度
const defaultPixel = 2;

// 计算iPhone6 px尺寸
const width = defaultDevice.width / defaultPixel;

// 获取缩放比例
const scale = deviceWidth / width;

/**
 * 设置text
 * @param {number} size
 * @returns {number}
 */
export const ScaleText = size => {
  size = Math.round((size * scale) / fontScale);
  return size;
}

/**
 * 设置size
 * @param {number} size
 * @returns {number}
 */
export const ScaleSize = size => {
  size = Math.round(size * scale);
  return size;
}
