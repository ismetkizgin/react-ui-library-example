module.exports = {
  stories: ['../lib/**/*_stories.mdx', '../lib/**/*_stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-theme-changer', 'storybook-dark-mode', 'storybook-addon-designs'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
