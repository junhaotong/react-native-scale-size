/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';

import 'react-native-text'
export const deviceWidth = Dimensions.get('window').width;          //设备的宽度
export const deviceHeight = Dimensions.get('window').height;        //设备的高度
let fontScale = PixelRatio.getFontScale();                          //返回字体大小缩放比例

const defaultPixel = 2;                                             //iphone6的像素密度

//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2); //获取缩放比例

export default {
    /**
     * 设置text
     * @param {number} size
     * @returns {number}
     */
    scaleText = size => {
        size = Math.round(size * scale / fontScale);
        return size;
    },
    /**
     * 设置size
     * @param {number} size
     * @returns {number}
     */
    scaleSize = size => {
        size = Math.round(size * scale);
        return size;
    }
}

