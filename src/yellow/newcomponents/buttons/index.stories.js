export default {
  title: 'NewComponents | Buttons',
  parameters: {
    componentSubtitle: 'Buttons',
  },
};

import './_index.scss';

export const primary = () => `
<div class="docs">
  <button class="button button--primary">Button Primary</button>
</div>
`

export const primaryDisabled = () => `
<div class="docs">
  <button disabled class="button button--primary" >Button disable</button>
</div>
`


export const primaryLoading = () => `
<div class="docs">
  <button class="button button--primary">
    <div class="spinner"></div>
  </button>
</div>
`

export const secondary = () => `
<div class="docs">
  <button class="button button--secondary">Contratar Profissional</button>
</div>
`

export const secondaryMobile = () => `
<div class="docs">
  <button class="button button--secondary button--secondary-mobile">Contratar Profissional</button>
</div>
`

export const secondaryDisabled = () => `
<div class="docs">
  <button disabled class="button button--secondary">Contratar Profissional</button>
</div>
`

export const secondaryLoading = () => `
<div class="docs">
  <button class="button button--secondary">
  <div class="spinner"></div>
  </button>
</div>
`

export const highlight = () => `
<div class="docs">
  <button class="button button--highlight">Contratar Profissional</button>
</div>
`

export const highlightLoading = () => `
<div class="docs">
  <button class="button button--highlight">
    <div class="spinner"></div>
  </button>
</div>
`


export const clear = () => `
  <div class="docs">
    <button class="button button--clear">Button Clear</button>
  </div>
`;


export const clearDisabled = () => `
<div class="docs">
  <button disabled class="button button--clear">Clear Disabled</button>
</div>
`;

export const clearLoding = () => `
<div class="docs">
  <button class="button button--clear">
    <div class="spinner"></di>
  </button>
</div>
`


