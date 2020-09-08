<p align="center">
  <a href="https://github.com/VF25G/TakiUI" target="_blank" rel="noopener noreferrer">
    <img width="100" src="./img/catLogo.png" alt="Taki UI logo">
  </a>
</p>

<div align="center">
  
[![Build Status](https://travis-ci.org/VF25G/TakiUI.svg?branch=master)](https://travis-ci.org/VF25G/TakiUI)
![](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
</div>
<h2 align="center">Taki UI 一个基于 Vue2.0 实现的轻量型 UI 框架</h2>

## 介绍
Taki UI: 本人在学习Vue过程中，实现的简易UI框架，提供常见组件。

Button - 按钮、Tabs - 标签页、Input - 输入框、Grid - 网格、Layout - 布局、Toast - 吐司、Popover - 气泡卡片、Collapse - 折叠面板

## 开始使用

1. 安装Taki UI

   ```bash
   yarn add takiui-beta
   ```

   或者

   ```bash
   npm install takiui-beta
   ```

2. 添加CSS样式

   使用Taki UI框架，CSS需要开启`border-box`。IE 8及以上浏览器支持该样式。

   ```css
   *, *::before, *::after { box-sizing: border-box; }
   ```

3. 引入Taki UI

   ```js
   import {Button, ButtonGroup, Icon} from 'takiui-beta'
   import 'takiui-beta/dist/index.css'
   
   export default {
     components: {
       't-button': Button,
       't-buttonGroup': ButtonGroup,
       't-icon': Icon
     }
   }
   ```
   
4. 使用组件

   ```html
   <t-button>Welcome to use Taki UI</t-button>
   ```

## 提问

欢迎提交[Issues](https://github.com/VF25G/TakiUI/issues)

## 联系方式

e-mail：replybber@gmail.com

## 开源许可

MIT Licensed | Copyright © 2020-present VF25G
