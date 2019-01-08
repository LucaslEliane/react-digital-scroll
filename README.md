# @music/mobile-location

> 云音乐移动端定位解决方案

[![pipeline status](https://g.hz.netease.com/NeteaseMusicUI/tl-mobile-location/badges/master/pipeline.svg)](https://g.hz.netease.com/NeteaseMusicUI/tl-mobile-location/commits/master)
[![coverage report](https://g.hz.netease.com/NeteaseMusicUI/tl-mobile-location/badges/master/coverage.svg)](https://g.hz.netease.com/NeteaseMusicUI/tl-mobile-location/commits/master)
[![nenpm](http://npm.hz.netease.com/badge/v/@music/mobile-location.svg)](http://npm.hz.netease.com/package/@music/mobile-location)
[![nenpm](http://npm.hz.netease.com/badge/d/@music/mobile-location.svg)](http://npm.hz.netease.com/package/@music/mobile-location)

## 使用

### 默认策略

默认定位策略使用顺序：
1. 站内： JSBridge GPS定位
2. 微信： 微信协议定位(由于云音乐微信注册的名称为：网易雷火云音乐，这里默认关闭微信定位)
3. 其他： H5定位

```javascript
import Location from '@music/mobile-location';

new Location({
    // 客户端启用定位，不传则以window判断
    isClient: true,
    // MUSIC_U，用户cookie的MUSIC_U(具名)/MUSIC_A(匿名)，请自行在服务端获取，为32位MD5的结果
    MUSIC_U: '0000000',
    // 是否启用session的权限缓存，启用如果用户没有授权，整个session期间不会再次调用协议，默认不启用
    authorityCache: false,
    cb: (lon, lat) => {
        // do something right
    },
    errCb: (err) => {
        // do something wrong
    }
}).location({
    // 是否启用微信定位，默认不启用，微信内退化为H5
    enableWechat: false,
    // 分别为站内定位的权限弹窗title和message
    alertTitle: '是否要开启权限？',
    alertMessage: '如果开启则会获取您的地理位置',
});
```

### 单独使用

```javascript
import Location from '@music/mobile-location';

new Location({
    isClient: true,
    MUSIC_U: '123123',
    authorityCache: false,
    cb: () => {}
    errCb: () => {}
}).H5Location();

new Location({
    isClient: true,
    MUSIC_U: '123123',
    authorityCache: false,
    cb: () => {}
    errCb: () => {}
}).NMLocation({
    alertTitle: '',
    alertMessage: '',
});

new Location({
    isClient: true,
    MUSIC_U: '123123',
    authorityCache: false,
    cb: () => {}
    errCb: () => {}
}).WeChatLocation();
```
