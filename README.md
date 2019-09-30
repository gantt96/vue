# 这是一个vue练习项目

## 用于记录xvue的学习成果

### 我是一个有灵魂的程序员，我的代码都是富有灵魂的

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabber 区域，使用的是 MUI 的Tabbar.html
    + 在制作购物车小图标的时候，操作会相对多一些：
    + 先把扩展图标的 css 样式阔被到项目于中
    + 拷贝扩展字体库 ttf文件到项目中
    + 为购物车小如表添加如下样式 `mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域防止一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为router-link


## 设置路由高亮


## 点击 tabbbar中的路由链接，展示对应的路由组件



## 制作首页轮播图布局



## 加载首页轮播图数据
1. 获取数据，如何获取呢，使用vue-resource
2. 使用vue-resource获取data数据
3. 将data上的图片数组使用v-for循环渲染每一个item