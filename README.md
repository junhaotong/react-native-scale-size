# react-native-scale-size
```
React Native屏幕适配工具
```

适配前后对比
![1_1533016729236_B57668D8-3232-457E-A95E-0C8C016050C2.png](https://bbs.reactnative.cn/assets/uploads/files/1533016730829-e372dafb-70c9-4ad6-999e-43efa0463ca6.png)
![https://bbs.reactnative.cn/assets/uploads/files/1533016730342-b57668d8-3232-457e-a95e-0c8c016050c2.png](https://bbs.reactnative.cn/assets/uploads/files/1533016730342-b57668d8-3232-457e-a95e-0c8c016050c2.png)
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
