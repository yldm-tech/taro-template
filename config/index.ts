import path from 'path'

const config = {
  projectName: 'taro-template',
  date: '2023-9-24',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: ['@tarojs/plugin-html', 'taro-plugin-tailwind'],
  defineConstants: {
    IS_H5: process.env.TARO_ENV === 'h5',
    IS_RN: process.env.TARO_ENV === 'rn',
    IS_WEAPP: process.env.TARO_ENV === 'weapp'
  },
  alias: {
    '@/': path.resolve(__dirname, '..', 'src'),
    '@/stores': path.resolve(__dirname, '..', 'src/stores'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false },
  },
  cache:{
    enable: true
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: '/src/assets',
    esnextModules: ['taro-ui','nutui-react-taro','nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-'],
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    output: {
      ios: 'ios/main.jsbundle',
      iosAssetsDest: 'ios',
      android: 'android/index.android.bundle',
      androidAssetsDest: 'android'
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
