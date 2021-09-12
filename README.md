# vue3-cms

初始账号：coderwhy
初始密码：123456

### 项目版本的介绍

v0.1.0:
项目规范的配置和 axios 的封装

v0.2.0:
tsconfig.json 配置选项解析, login 页面完成

v0.3.0:
登录逻辑的完成跳转到 Main 首页

v0.4.0:
Main 侧边栏导航完成 映射页面生成

v0.5.0:
动态路由,根据后端返回的不同人员的权限添加不同的路由 - 权限管理方案三
对 element 的 form 表单组件二次进行封装,实现表单的可配置,根据不同的参数生成不同的表单和数据

v0.6.0:
对 element 的 table 组件进行二次封装
系统管理 > 用户管理: 页面布局完成，组件封装配置抽取,重置/搜索/分页/按钮权限/其它部分页面的布局完成

<!-- 按钮权限管理 bug 未解决 X -->

v0.7.0:
新建/编辑/删除功能的封装实现 组件逻辑的抽取

v0.8.0:
Echarts 绘制图表

v0.8.5:
页面完善 页面完善 页面完善 页面完善 页面完善

### 项目目录

vue3-ts-cms
├── .husky
│   ├── _
│   │   └── husky.sh
│   ├── commit-msg
│   └── pre-commit
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── index.less
│   │   └── img
│   │       ├── login-bg.svg
│   │       └── logo.png
│   ├── base-ui
│   │   ├── card
│   │   │   ├── src
│   │   │   │   └── card.vue
│   │   │   └── index.ts
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEchart.ts
│   │   │   ├── src
│   │   │   │   └── BaseEchart.vue
│   │   │   └── index.ts
│   │   ├── form
│   │   │   ├── src
│   │   │   │   └── Form.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── table
│   │       ├── src
│   │       │   └── Table.vue
│   │       └── index.ts
│   ├── components
│   │   ├── nav-header
│   │   │   ├── src
│   │   │   │   ├── Breadcrumb.vue
│   │   │   │   └── NavHeader.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── nav-menu
│   │   │   ├── src
│   │   │   │   └── NavMenu.vue
│   │   │   └── index.ts
│   │   ├── page-content
│   │   │   ├── src
│   │   │   │   └── PageContent.vue
│   │   │   └── index.ts
│   │   ├── page-dialog
│   │   │   ├── src
│   │   │   │   └── PageDialog.vue
│   │   │   └── index.ts
│   │   ├── page-echarts
│   │   │   ├── src
│   │   │   │   ├── BarEchart.vue
│   │   │   │   ├── LineEchart.vue
│   │   │   │   ├── MapEchart.vue
│   │   │   │   ├── PieEchart.vue
│   │   │   │   └── RoseEchart.vue
│   │   │   ├── types
│   │   │   │   └── types.ts
│   │   │   ├── utils
│   │   │   │   ├── convert-data.ts
│   │   │   │   └── coordinate-data.ts
│   │   │   └── index.ts
│   │   └── page-search
│   │       ├── src
│   │       │   └── PageSearch.vue
│   │       └── index.ts
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── usePageDialog.ts
│   │   ├── usePageSearch.ts
│   │   └── usePermissions.ts
│   ├── router
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard
│   │   │   │   │   └── dashboard.ts
│   │   │   │   └── overview
│   │   │   │       └── overview.ts
│   │   │   ├── product
│   │   │   │   ├── category
│   │   │   │   │   └── category.ts
│   │   │   │   └── goods
│   │   │   │       └── goods.ts
│   │   │   ├── story
│   │   │   │   ├── chat
│   │   │   │   │   └── chat.ts
│   │   │   │   └── list
│   │   │   │       └── list.ts
│   │   │   └── system
│   │   │       ├── department
│   │   │       │   └── department.ts
│   │   │       ├── menu
│   │   │       │   └── menu.ts
│   │   │       ├── role
│   │   │       │   └── role.ts
│   │   │       └── user
│   │   │           └── user.ts
│   │   └── index.ts
│   ├── service
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── dashboard.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── request.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── store
│   │   ├── login
│   │   │   ├── loginStore.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── types.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   ├── index.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── catche.ts
│   │   ├── formatTime.ts
│   │   └── map-menus.ts
│   ├── views
│   │   ├── login
│   │   │   ├── cpns
│   │   │   │   ├── Login-from.vue
│   │   │   │   ├── Login-note-input.vue
│   │   │   │   └── Login-phone-input.vue
│   │   │   └── Login.vue
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard
│   │   │   │   │   └── Dashboard.vue
│   │   │   │   └── overview
│   │   │   │       └── Overview.vue
│   │   │   ├── product
│   │   │   │   ├── category
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── content.config.ts
│   │   │   │   │   │   └── search.config.ts
│   │   │   │   │   └── Category.vue
│   │   │   │   └── goods
│   │   │   │       ├── config
│   │   │   │       │   ├── content.config.ts
│   │   │   │       │   └── search.config.ts
│   │   │   │       └── Goods.vue
│   │   │   ├── story
│   │   │   │   ├── chat
│   │   │   │   │   └── Chat.vue
│   │   │   │   └── list
│   │   │   │       └── List.vue
│   │   │   ├── system
│   │   │   │   ├── department
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── content.config.ts
│   │   │   │   │   │   ├── dialog.config.ts
│   │   │   │   │   │   └── search.config.ts
│   │   │   │   │   └── Department.vue
│   │   │   │   ├── menu
│   │   │   │   │   ├── config
│   │   │   │   │   │   └── content.config.ts
│   │   │   │   │   └── Menu.vue
│   │   │   │   ├── role
│   │   │   │   │   ├── config
│   │   │   │   │   │   ├── content.config.ts
│   │   │   │   │   │   ├── dialog.config.ts
│   │   │   │   │   │   └── search.config.ts
│   │   │   │   │   └── Role.vue
│   │   │   │   └── user
│   │   │   │       ├── config
│   │   │   │       │   ├── content.config.ts
│   │   │   │       │   ├── dialog.config.ts
│   │   │   │       │   └── search.config.ts
│   │   │   │       └── User.vue
│   │   │   └── Main.vue
│   │   └── not-found
│   │       └── NotFound.vue
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .prettierignore
├── .prettierrc
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── README.md
├── tree.md
├── tsconfig.json
└── vue.config.js

权限管理：

方案一：全部注册

方案二：配置好哪些角色需要展示哪些页面，根据后端返回的数据判断需要动态加载的路由

方案三：定义好全部路由 根据菜单动态添加生成路由映射
