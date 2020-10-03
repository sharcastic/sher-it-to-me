module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  stories: ['../src/components/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          // include: [path.resolve(__dirname, '../src')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    }
  ]
};
