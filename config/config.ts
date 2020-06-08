// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/RegisterResult',
        },
        {
          name: 'register',
          path: '/user/register',
          component: './user/register',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/Test',
              name: 'TestPage',
              icon: 'environment',
              authority: ['admin'],
              routes: [
                {
                  path: '/Test/Test01',
                  name: '01 BlankPage',
                  icon: 'Bulb',
                  component: './TestPages/Test01BlankPage/NewPage',
                },
                {
                  path: '/Test/Test02',
                  name: '02 Component&props',
                  icon: 'Build',
                  component: './TestPages/Test02Component&props/Component&props',
                },
                {
                  path: '/Test/Test03',
                  name: '03 ChoiceComponent',
                  icon: 'Select',
                  component: './TestPages/Test03ChoiceComponent/ChoiceComponent',
                },
                {
                  path: '/Test/Test04',
                  name: '04 State&Lifecycle',
                  icon: 'Hourglass',
                  component: './TestPages/Test04State&Lifecycle/State&Lifecycle',
                },
                {
                  path: '/Test/Test05',
                  name: '05 Event',
                  icon: 'Tool',
                  component: './TestPages/Test05Event/Event',
                },
                {
                  path: '/Test/Test06',
                  name: '06 Rendering',
                  icon: 'Clear',
                  component: './TestPages/Test06Rendering/Rendering',
                },
                {
                  path: '/Test/Test07',
                  name: '07 List&Key',
                  icon: 'OrderedList',
                  component: './TestPages/Test07List&Key/List&Key',
                },
                {
                  path: '/Test/Test08',
                  name: '08 Form',
                  icon: 'Snippets',
                  component: './TestPages/Test08Form/Form',
                },
                {
                  name: '09 LiftingStateUp',
                  icon: 'ToTop',
                  path: '/test/test09',
                  component: './TestPages/Test09LiftingStateUp/LiftState',
                },
                {
                  name: '10Composition',
                  icon: 'smile',
                  path: '/test/test10',
                  component: './TestPages/Test10Composition/Composition',
                },
                {
                  path: '/Test/TestNaN',
                  name: 'NaN tic-tac-toe',
                  icon: 'Number',
                  component: './TestPages/TestTicTacToe/TicTacToe',
                },
              ],
            },
            {
              path: '/DvaTest',
              name: 'DvaTest',
              icon: 'DeploymentUnit',
              authority: ['admin'],
              routes: [
                {
                  path: '/DvaTest/Dva01',
                  name: '01 React Communication',
                  icon: 'Bulb',
                  component: './DvaTest/Dva01/index',
                },
              ],
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'list.table-list',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
