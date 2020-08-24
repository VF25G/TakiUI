# 介绍
 webUI: 本人在学习Vue过程中，实现的简易UI框架。

## 开始使用

1. 添加CSS样式

   + 使用webUI框架，CSS需要开启`border-box`。IE 8及以上浏览器支持该样式。

   ```css
   *, *::before, *::after { box-sizing: border-box; }
   ```

   + 此外，目前需要设置默认颜色等基础变量。IE 15级以上浏览器支持该样式。 --- 后续会变更为SCSS变量

   ```css
   html {
     --button-height: 32px;
     --font-size: 14px;
     --button-bg: white;
     --button-active-bg: #eee;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
   }
   ```

2. 安装webUI

   ```bash
   npm i --save webui-test-1
   ```

3. 引入webUI

   ```js
   import {Button, ButtonGroup, Icon} from 'webui-test-1'
   import 'webui-test-1/dist/index.css'
   
   export default {
     components: {
       'g-button': Button,
       'g-buttonGroup': ButtonGroup,
       'g-icon': Icon
     }
   }
   ```
