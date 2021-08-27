import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // webpack中的一个函数 - 加载这个文件夹下所有匹配到的文件
  const routeFiles = require.context("../router/main", true, /\.ts/)
  // console.log(routeFiles.keys())  // 获取到哦所有文件的路径
  routeFiles.keys().forEach((key) => {
    // 对路径进行拼接
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  // 递归操作
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 将所有路径和后端返回的路径进行对比 添加到routes里面
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
