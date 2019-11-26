import { configure, addParameters } from '@storybook/html';
import ninjaTheme from './ninjaTheme';

addParameters({
  options: {
    theme: ninjaTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
