module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        alias: {
          '@server': './src/server',
          '@services': './src/services',
          '@models': './src/models',
          '@resolvers': './src/database/resolvers',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
