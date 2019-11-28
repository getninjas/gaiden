import { create } from '@storybook/theming/create';
import logo from '../public/images/Logo.png';

export default create({
  base: 'light',

  colorPrimary: 'black',
  colorSecondary: '#212121',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Source Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#212121',
  barBg: '#FFEA52',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'GetNinjas Styleguide',
  brandUrl: 'https://www.getninjas.com.br',
  brandImage: logo,
});
