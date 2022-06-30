const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },

  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: false,
        library,
        engineScope: '@alilc',
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                title: 'fusion组件库',
                package: '@alifd/next',
                version: '1.23.0',
                urls: [
                  'https://g.alicdn.com/code/lib/alifd__next/1.23.18/next.min.css',
                  'https://g.alicdn.com/code/lib/alifd__next/1.23.18/next-with-locales.min.js',
                ],
                library: 'Next',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: ['//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js'],
                library: 'icons',
              },
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};
