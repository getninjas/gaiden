export default {
  title: 'Components | Button',
};

import './index.scss';

export const buttonDisabled = () => '<button class="btn btn__primary btn__primary--default btn__primary--small" disabled="true">Hello World</button>';

export const buttonPrimary = () => '<button class="btn btn__primary btn__primary--default btn__primary--small">Hello World</button>';

export const buttonSecondary = () => '<button class="btn btn__secondary btn__secondary--default btn__secondary--small">Hello World</button>';

export const buttonClassic = () => '<button class="btn btn__classic btn__classic--default btn__classic--small">Hello World</button>';
