import Logo from '../../../../public/images/Logo.png';

export default {
  title: 'Components | Topbar',
  parameters: {
    componentSubtitle: 'Used in top of the pages in Website',
  },
}

import './_index.scss';
import '../heading/_index.scss'
import '../quote/_index.scss'

export const topbarOnlyText = () => `
  <header class="topbar topbar--centered">
    <h1 class="heading heading--s">Lorem Ipsum</h1>
  </header>
`;

export const topbarOnlyBrand = () => `
  <header class="topbar">
    <div class="topbar__brand">
      <img src=${Logo} />
    </div>
  </header>
`;

export const topbarOnlyBrandCentered = () => `
  <header class="topbar topbar--centered">
    <div class="topbar__brand">
      <img src=${Logo} />
    </div>
  </header>
`;

export const topbarOnlyBrandWithText = () => `
  <header class="topbar">
    <div class="topbar__brand">
      <img src=${Logo} />
    </div>
    <h4 class="quote quote--m topbar__text">A maior plataforma de contratação de serviços da América Latina</h4>
  </header>
`;
