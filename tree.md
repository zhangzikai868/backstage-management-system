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
