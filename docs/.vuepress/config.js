module.exports = {
    title: 'Hello VuePress',
    description: 'Vue Docs',
    locales: {
      '/': {
          lang: 'zh-CN',
          title: ' Vue.js',
          description: '用于构建用户界面的渐进式框架'
      },
      '/en': {
        lang: 'en-US',
        title: ' Vue.js',
        description: 'a progressive framework for building user interfaces'
      }
    },
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    base: '/vue.js/',
    themeConfig: {
      repo: 'JacobHsu/vue.js',
      logo: '/assets/img/logo.png',
      locales: {
          '/': {
            selectText: '选择语言',
            label: '中文(简体)',
            editLinkText: 'Edit this page on GitHub',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            nav: [
              { text: '指南', link: '/zh-cn/guide/' },
              { text: 'API', link: '/zh-cn/api/' },
              { text: '套件', link: '/zh-cn/npm/' },
              { text: '风格', link: '/zh-cn/style/' },
              {
                  text: '视频教程',
                  ariaLabel: '视频教程',
                  items: [
                    { text: 'DCloud 视频教程', link: 'https://learning.dcloud.io/#/' },
                    { text: 'Vue Mastery (英文)', link: 'https://www.vuemastery.com/courses/' },
                    { text: 'Vue School (英文)', link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown' }
                  ]
              },
              { text: 'Vuex', link: '/zh-cn/vuex/' },
              { text: 'VueRouter', link: '/zh-cn/vuerouter/' },
              { text: 'VueLoader', link: '/zh-cn/vueloader/' },
              {
                text: '工具',
                ariaLabel: '工具',
                items: [
                  { text: 'VSCode', link: '/zh-cn/vscode/' },
                  { text: 'ESlint', link: '/zh-cn/eslint/' },
                  { text: 'Images', link: '/zh-cn/images/' },
                  { text: 'Webpack', link: '/zh-cn/webpack/' },
                  { text: 'Debug', link: '/zh-cn/debug/' },
                  { text: 'Server', link: '/zh-cn/server/' },
                  { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
                  { text: 'Notepad', link: '/zh-cn/notepad/' },
                ]
              }
            ],
            sidebar: {
              '/zh-cn/guide/': genSidebarConfig('指南', '组件', '复用', '内在'),
              '/zh-cn/api/': genSidebarAPI('API', 'Options'),
              '/zh-cn/npm/': genSidebarNPM('套件', 'UI', 'API', 'Utility' ,'验证'),
              '/zh-cn/style/': genSidebarStyle('风格'),
              '/zh-cn/vuex/': genSidebarVuex('Vuex', '核心概念'),
              '/zh-cn/vuerouter/': genSidebarVueRouter('VueRouter'),
              '/zh-cn/vueloader/': genSidebarLoader('VueLoader')
            },
          },
          '/en': {
              selectText: 'Languages',
              label: 'English',
              editLinkText: 'Edit this page on GitHub',
              serviceWorker: {
                updatePopup: {
                  message: "New content is available.",
                  buttonText: "Refresh"
                }
              },
          }
      }
  }
}

// '指南', '组件', '复用', '内在'
function genSidebarConfig (title, components, title3, reactivity) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'instance',
        'scoped-css',
        'list',
        'events',
        'transitions',
        'forms',
        'typescript'
      ]
    },
    {
      title: components,
      collapsable: false,
      children: [
        'components-slots',
        'components-dynamic-async',
        'components-edge-cases'
      ]
    },
    {
      title: title3,
      collapsable: false,
      children: [
        'mixins'
      ]
    },
    {
      title: reactivity,
      collapsable: false,
      children: [
        'reactivity'
      ]
    }
  ]
}

function genSidebarAPI (title, title2) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title2,
      collapsable: false,
      children: [
        'options-composition',
      ]
    }
  ]
}

// '套件', 'UI', 'API', 'Utility' ,'验证'
function genSidebarNPM (title, ui, title3, utility, title5) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'debug',
        'bootstrap-vue',
        'request',
        'vue-multiselect',
        'vuejs-datepicker',
        'vue-star-rating',
        'data',
        'i18n',
        'element-ui',
        'vue-chartjs',
        'unit-testing',
        'sass-loader',
        'postcss-pxtorem'
      ]
    },
    {
      title: ui,
      collapsable: false,
      children: [
        'ui',
        'iview',
        'swiper'
      ]
    },
    {
      title: title3,
      collapsable: false,
      children: [
        'axios',
        'mockjs',
        'json-server',
        'cors',
        'stompjs'
      ]
    },
    {
      title: utility,
      collapsable: false,
      children: [
        'utility',
        'moment',
        'crypto-js'
      ]
    },
    {
      title: title5,
      collapsable: false,
      children: [
        'vee-validate'
      ]
    }
  ]
}

function genSidebarStyle (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'essential'
      ]
    }
  ]
}

function genSidebarVuex (title, title2) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'debug',
        'structure'
      ]
    },
    {
      title: title2,
      collapsable: false,
      children: [
        'state',
        'getters',
        'actions',
        'mutations'
      ]
    }
  ]
}

function genSidebarVueRouter (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'nested-routes',
        'redirect-and-alias',
        'navigation-guards'
      ]
    }
  ]
}

function genSidebarLoader (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'pre-processors',
        'css-modules'
      ]
    }
  ]
}
