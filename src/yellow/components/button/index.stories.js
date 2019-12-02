export default {
  title: 'Components | Button',
  parameters: {
    componentSubtitle: 'Buttons',
  },
};

import './_index.scss';

export const allButtons = () => `
  <div class="space-docs">
    <button class="btn btn__primary btn__primary--default btn__primary--small" disabled="true">Continuar</button>
  </div>
  <div class="space-docs">
    <button class="btn btn__primary btn__primary--default btn__primary--small">Continuar</button>
  </div>
  <div class="space-docs">
    <button class="btn btn__secondary btn__secondary--default btn__secondary--small">Continuar</button>
  </div>
  <div class="space-docs">
    <button class="btn btn__classic btn__classic--default btn__classic--small">Continuar</button>
  </div>
`;

export const disabled = () => '<button class="btn btn__primary btn__primary--default btn__primary--small" disabled="true">Continuar</button>';

export const primary = () => '<button class="btn btn__primary btn__primary--default btn__primary--small">Continuar</button>';

export const secondary = () => '<button class="btn btn__secondary btn__secondary--default btn__secondary--small">Continuar</button>';

export const classic = () => '<button class="btn btn__classic btn__classic--default btn__classic--small">Continuar</button>';
