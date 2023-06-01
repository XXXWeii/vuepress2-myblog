# 个人博客

https://blog.mo7.cc

博客源码，基于 `VuePress Theme Hope` 搭建

## 博客框架

https://v2.vuepress.vuejs.org/zh/

## 主题文档

https://theme-hope.vuejs.press/zh/

## 官方案例

https://mrhope.site/

## 评论服务

文档\
https://waline.js.org

服务地址\
https://talk.mo7.cc

管理后台(Github 登录)
https://talk.mo7.cc/ui

## 运行

编译环境: Debian 11 bullseye

node 版本: v18 LTS

```bash

# 启用 pnpm
corepack enable
corepack prepare pnpm@latest --activate

# 安装依赖
pnpm install

# 更新依赖
pnpm run update

# 运行
pnpm run dev

# 编译打包
pnpm run build

# 更新同步
pnpm run sync

# 发布到
pnpm run deploy

```
