export default {
  title: 'Components | Button',
  parameters: {
    componentSubtitle: 'Buttons',
  },
};

import './index.scss';

/**
 * Use `Badge` to highlight key info with a predefined status.
 */
export const allButtons = () => `
  <div style="margin-bottom: 20px">
    <button class="btn btn__primary btn__primary--default btn__primary--small" disabled="true">Hello World</button>
  </div>
  <div style="margin-bottom: 20px">
    <button class="btn btn__primary btn__primary--default btn__primary--small">Hello World</button>
  </div>
  <div style="margin-bottom: 20px">
    <button class="btn btn__secondary btn__secondary--default btn__secondary--small">Hello World</button>
  </div>
  <div style="margin-bottom: 20px">
    <button class="btn btn__classic btn__classic--default btn__classic--small">Hello World</button>
  </div>
`;

export const disabled = () => '<button class="btn btn__primary btn__primary--default btn__primary--small" disabled="true">Hello World</button>';

export const primary = () => '<button class="btn btn__primary btn__primary--default btn__primary--small">Hello World</button>';

export const secondary = () => '<button class="btn btn__secondary btn__secondary--default btn__secondary--small">Hello World</button>';

export const classic = () => '<button class="btn btn__classic btn__classic--default btn__classic--small">Hello World</button>';
