export default {
  title: 'Components | Highlight',
  parameters: {
    componentSubtitle: 'Highlight emphasizes some part or the text.',
  },
};

import './index.scss';

export const allHighlight = () => `
  <div>
    <h1 class="highlight highlight--l">Hello World</h1>
  </div>
  <div>
    <h1 class="highlight highlight--m">Hello World</h1>
  </div>
  <div>
    <h1 class="highlight highlight--s">Hello World</h1>
  </div>
`;

export const Large = () => '<h1 class="highlight highlight--l">Hello World</h1>';

export const Medium = () => '<h1 class="highlight highlight--m">Hello World</h1>';

export const Small = () => '<h1 class="highlight highlight--s">Hello World</h1>';

export const LargeInverse = () =>`
  <div style="background-color: #000">
    <h1 class="highlight highlight--l highlight--inverse">Hello World</h1>
  </div>
`;
