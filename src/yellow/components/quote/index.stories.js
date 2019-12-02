export default {
  title: 'Components | Quote',
  parameters: {
    componentSubtitle: 'Quote give italic attribute to font.',
  },
};

import './_index.scss';

export const allQuotes = () => `
  <div>
    <h1 class="quote quote--xs">Precisando de pedreiros?</h1>
  </div>
  <div>
    <h1 class="quote quote--xxs">Precisando de pedreiros?</h1>
  </div>
`;

export const XSmall = () => '<h1 class="quote quote--xs">Precisando de pedreiros?</h1>';

export const XXSmall = () => '<h1 class="quote quote--xxs">Precisando de pedreiros?</h1>';

export const XSmallInverse = () =>`
  <div style="background-color: #000">
    <h1 class="quote quote--inverse">Precisando de pedreiros?</h1>
  </div>
`;

export const Strong = () =>
'<h1 class="quote quote--dark quote--strong">Precisando de pedreiros?</h1>';
