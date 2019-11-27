export default {
  title: 'Components | Heading',
};

import './index.scss';

export const allHeadings = () => `
  <div>
    <h1 class="heading heading--xl">Precisando de pedreiro?</h1>
  </div>
  <div>
    <h2 class="heading heading--l">Precisando de pedreiro?</h2>
  </div>
  <div>
    <h3 class="heading heading--m">Precisando de pedreiro?</h3>
  </div>
  <div>
    <h4 class="heading heading--s">Precisando de pedreiro?</h4>
  </div>
  <div>
    <h5 class="heading heading--xs">Precisando de pedreiro?</h5>
  </div>
`;

export const XLarge = () => '<h1 class="heading heading--xl">Precisando de pedreiro?</h1>';

export const Large = () => '<h2 class="heading heading--l">Precisando de pedreiro?</h2>';

export const Medium = () => '<h3 class="heading heading--m">Precisando de pedreiro?</h3>';

export const Small = () => '<h4 class="heading heading--s">Precisando de pedreiro?</h4>';

export const XSmall = () => '<h5 class="heading heading--xs">Precisando de pedreiro?</h5>';

export const Strong = () => `
  <div>
    <h1 class="heading heading--xl heading--strong">Precisando de pedreiro?</h1>
  </div>
  <div>
    <h2 class="heading heading--l heading--strong">Precisando de pedreiro?</h2>
  </div>
  <div>
    <h3 class="heading heading--m heading--strong">Precisando de pedreiro?</h3>
  </div>
  <div>
    <h4 class="heading heading--s heading--strong">Precisando de pedreiro?</h4>
  </div>
  <div>
    <h5 class="heading heading--xs heading--strong">Precisando de pedreiro?</h5>
  </div>
`;

export const Inverse = () => `
  <div style="background-color: #000">
    <h1 class="heading heading--xl heading--inverse">Precisando de pedreiro?</h1>
  </div>
`;
