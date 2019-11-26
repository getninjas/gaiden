export default {
  title: 'Components | Heading',
};

import './index.scss';

export const allHeadings = () => `
  <div>
    <h1 class="heading heading--xl">Hello World</h1>
  </div>
  <div>
    <h2 class="heading heading--l">Hello World</h2>
  </div>
  <div>
    <h3 class="heading heading--m">Hello World</h3>
  </div>
  <div>
    <h4 class="heading heading--s">Hello World</h4>
  </div>
  <div>
    <h5 class="heading heading--xs">Hello World</h5>
  </div>
`;

export const XLarge = () => '<h1 class="heading heading--xl">Hello World</h1>';

export const Large = () => '<h2 class="heading heading--l">Hello World</h2>';

export const Medium = () => '<h3 class="heading heading--m">Hello World</h3>';

export const Small = () => '<h4 class="heading heading--s">Hello World</h4>';

export const XSmall = () => '<h5 class="heading heading--xs">Hello World</h5>';
