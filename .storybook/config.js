import { configure, addParameters } from '@storybook/html';
import ninjaTheme from './ninjaTheme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


addParameters({
  options: {
    theme: ninjaTheme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
