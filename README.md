# react-native-scale-size
```
React Native屏幕适配工具
```

### Getting started
#### 1.安装
```
$ npm i react-native-scale-size --save
```
#### 2.导入
```
import {
  ScaleSize,
  ScaleText
} from 'react-native-scale-size';
```

### Example
```
const styles = StyleSheet.create({
  content: {
    width: ScaleSize(100),
    fontSize: ScaleText(18)
  }
})
```

## 注意
ScaleText在Android设备下，会根据系统设置字体大小作调整，如不需要，可全面使用ScaleSize

如对您有帮助，请给个star
