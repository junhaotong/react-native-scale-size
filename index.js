/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';
//设备的宽度
export const deviceWidth = Dimensions.get('window').width;
//设备的高度
export const deviceHeight = Dimensions.get('window').height;
//字体大小缩放比例
let fontScale = PixelRatio.getFontScale();
//iphone6的像素密度
const defaultPixel = 2;

//px转换成dp
const w = 750 / defaultPixel;
const h = 1334 / defaultPixel;
//获取缩放比例
const scale = Math.min(deviceHeight / h, deviceWidth / w);

export default {
    /**
     * 设置text
     * @param {number} size
     * @returns {number}
     */
    scaleText: size => {
        size = Math.round(size * scale / fontScale);
        return size;
    },
    /**
     * 设置size
     * @param {number} size
     * @returns {number}
     */
    scaleSize: size => {
        size = Math.round(size * scale);
        return size;
    }
}
