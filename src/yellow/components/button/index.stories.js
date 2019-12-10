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

export const secondary = () => `
  <div class="docs">  
    <button class="btn btn--secondary btn--small">Button Secondary</button>
  </div>
`;

export const secondaryLarge = () => `
  <div class="docs">  
    <button class="btn btn--secondary btn--large">Button Secondary</button>
  </div>
`;

export const secondaryDisabled = () => `
  <div class="docs">  
    <button class="btn btn--secondary btn--small" disabled="true">Button Secondary</button>
  </div>
`;

export const secondaryLoading = () => `
  <div class="docs">  
    <button class="btn btn--secondary btn--small btn--loading">Button Secondary</button>
  </div>
`;

export const secondaryLargeLoading = () => `
  <div class="docs">  
    <button class="btn btn--secondary btn--large btn--loading">Button Secondary</button>
  </div>
`;

export const secondaryInverse = () => `
  <div class="docs docs--inverse">  
    <button class="btn btn--secondary btn--small btn--inverse">Button Secondary</button>
  </div>
`;

export const secondaryInverseDisabled = () => `
  <div class="docs docs--inverse">  
    <button class="btn btn--secondary btn--small btn--inverse" disabled="true">Button Secondary</button>
  </div>
`;

export const secondaryInverseLoading = () => `
  <div class="docs docs--inverse">  
    <button class="btn btn--secondary btn--small btn--inverse btn--loading">Button Secondary</button>
  </div>
`;

export const clear = () => `
  <div class="docs">  
    <button class="btn btn--clear btn--small">Button Clear</button>
  </div>
`;

export const clearLarge = () => `
  <div class="docs">  
    <button class="btn btn--clear btn--large">Button Clear</button>
  </div>
`;

export const clearDisabled = () => `
  <div class="docs">  
    <button class="btn btn--clear btn--small" disabled="true">Button Clear</button>
  </div>
`;

export const clearInverse = () => `
  <div class="docs docs--inverse">  
    <button class="btn btn--clear btn--small btn--inverse">Button Clear</button>
  </div>
`;

export const ultimate = () => `
  <div class="docs">  
    <button class="btn btn--ultimate btn--small">Button Ultimate</button>
  </div>
`;

export const ultimateLarge = () => `
  <div class="docs">  
    <button class="btn btn--ultimate btn--large">Button Ultimate</button>
  </div>
`;

export const ultimateDisabled = () => `
  <div class="docs">  
    <button class="btn btn--ultimate btn--small" disabled="true">Button Ultimate</button>
  </div>
`;

export const ultimateLoading = () => `
  <div class="docs">  
    <button class="btn btn--ultimate btn--small btn--loading">Button Ultimate</button>
  </div>
`;
