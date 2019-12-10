export default {
  title: 'Components | Button',
  parameters: {
    componentSubtitle: 'Buttons',
  },
};

import './_index.scss';

export const allButtons = () => `
  <div class="docs space-docs">
    <button class="btn btn--primary btn--small">Continuar</button>
  </div>
  <div class="docs space-docs">
    <button class="btn btn--secondary btn--small">Continuar</button>
  </div>
`;

export const primary = () => `
  <div class="docs">
    <button class="btn btn--primary btn--small">Button Primary</button>
  </div>
`;

export const primaryLarge = () => `
  <div class="docs">
    <button class="btn btn--primary btn--large">Button Primary</button>
  </div>
`;

export const primaryLoading = () => `
  <div class="docs">
    <button class="btn btn--primary btn--large btn--loading">Button Primary</button>
  </div>
`;

export const primaryDisabled = () => `
  <div class="docs">
    <button class="btn btn--primary btn--small" disabled="true">Button Primary</button>
  </div>
`;

export const inverse = () => `
  <div class="docs docs--inverse">
    <button class="btn btn--inverse btn--small">Button Inverse</button>
  </div>
`;

export const inverseLarge = () => `
  <div class="docs docs--inverse">
    <button class="btn btn--inverse btn--large">Button Inverse</button>
  </div>
`;

export const inverseLoading = () => `
  <div class="docs docs--inverse">
    <button class="btn btn--inverse btn--large btn--loading">Button Inverse</button>
  </div>
`;

export const secondary = () => '<button class="btn btn--secondary btn--small">Button Secondary</button>';
