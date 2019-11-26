export default {
  title: 'Components | Quote',
  parameters: {
    componentSubtitle: 'Quote give italic attribute to font.',
  },
};

import './index.scss';

export const allQuotes = () => `
  <div>
    <h1 class="quote quote--xs">Hello World</h1>
  </div>
  <div>
    <h1 class="quote quote--xxs">Hello World</h1>
  </div>
`;

export const XSmall = () => '<h1 class="quote quote--xs">Hello World</h1>';

export const XXSmall = () => '<h1 class="quote quote--xxs">Hello World</h1>';

export const XSmallInverse = () =>`
  <div style="background-color: #000">
    <h1 class="quote quote--inverse">Hello World</h1>
  </div>
`;
