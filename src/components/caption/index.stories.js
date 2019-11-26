export default {
  title: 'Components | Caption',
  parameters: {
    componentSubtitle: 'Caption are used for minor text.',
  },
};

import './index.scss';

export const allCaptions = () => `
  <div>
  <h1 class="caption caption--dark">Hello World</h1>
  </div>
  <div>
  <h1 class="caption caption--medium">Hello World</h1>
  </div>
  <div>
  <h1 class="caption caption--positive">Hello World</h1>
  </div>
  <div>
  <h1 class="caption caption--alert">Hello World</h1>
  </div>
  <div>
  <h1 class="caption caption--negative">Hello World</h1>
  </div>
`;

export const Dark = () => '<h1 class="caption caption--dark">Hello World</h1>';

export const Medium = () => '<h1 class="caption caption--medium">Hello World</h1>';

export const Positive = () => '<h1 class="caption caption--positive">Hello World</h1>';

export const Alert = () => '<h1 class="caption caption--alert">Hello World</h1>';

export const Negative = () => '<h1 class="caption caption--negative">Hello World</h1>';

export const Inverse = () =>`
  <div style="background-color: #000">
    <h1 class="caption caption--inverse">Hello World</h1>
  </div>
`;
