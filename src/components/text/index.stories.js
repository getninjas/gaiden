export default {
  title: 'Components | Text',
  parameters: {
    componentSubtitle: 'Text gives style to font.',
  },
};

import './index.scss';

export const allText = () => `
  <div>
    <h1 class="text text--dark">Hello World</h1>
  </div>
  <div>
    <h1 class="text text--medium">Hello World</h1>
  </div>
  <div>
    <h1 class="text text--positive">Hello World</h1>
  </div>
  <div>
    <h1 class="text text--alert">Hello World</h1>
  </div>
  <div>
    <h1 class="text text--negative">Hello World</h1>
  </div>
`;

export const Dark = () => '<h1 class="text text--dark">Hello World</h1>';

export const Medium = () => '<h1 class="text text--medium">Hello World</h1>';

export const Positive = () => '<h1 class="text text--positive">Hello World</h1>';

export const Alert = () => '<h1 class="text text--alert">Hello World</h1>';

export const Negative = () => '<h1 class="text text--negative">Hello World</h1>';

export const Inverse = () =>`
  <div style="background-color: #000">
    <h1 class="text text--inverse">Hello World</h1>
  </div>
`;
