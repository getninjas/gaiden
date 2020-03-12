import Logo from '../../../../public/images/Logo_brand.png';

export default {
  title: 'Components | Topbar',
  parameters: {
    componentSubtitle: 'Used in top of the pages in Website',
  },
}

import './_index.scss';
import '../heading/_index.scss';
import '../quote/_index.scss';
import '../button/_index.scss';

export const topbarOnlyText = () => `
  <header class="topbar">
    <div class="topbar__container topbar__container--centered">
      <h1 class="heading heading--s">Lorem Ipsum</h1>
    </div>
  </header>
`;

export const topbarOnlyBrand = () => `
  <header class="topbar">
    <div class="topbar__container">
      <div class="topbar__brand">
        <img src=${Logo} />
      </div>
    </div>
  </header>
`;

export const topbarOnlyBrandCentered = () => `
  <header class="topbar topbar--centered">
    <div class="topbar__container">
      <div class="topbar__brand">
        <img src=${Logo} />
      </div>
    </div>
  </header>
`;

export const topbarBrandWithText = () => `
  <header class="topbar">
    <div class="topbar__container">
      <div class="topbar__brand">
        <img src=${Logo} />
        <h4 class="quote quote--m topbar__text">A maior plataforma de contratação de serviços da América Latina</h4>
      </div>
    </div>
  </header>
`;

export const topbarBrandWithButton = () => `
  <header class="topbar">
    <div class="topbar__container">
      <div class="topbar__brand">
        <img src=${Logo} />
      </div>
      <div class="menu-icon">
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
      </div>
      <div class="topbar__navigation">
        <a class="topbar__item btn btn--primary btn--small">Button 1</a>
        <a class="topbar__item btn btn--primary btn--small">Button 2</a>
      </div>
    </div>
  </header>
`;

export const topbarBrandWithButtonAndLink = () => `
  <header class="topbar">
    <div class="topbar__container">
      <div class="topbar__brand">
        <img src=${Logo} />
      </div>
      <div class="menu-icon">
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line"></span>
      </div>
      <div class="topbar__navigation">
        <a class="topbar__item btn btn--clear btn--small">Button Clear</a>
        <a class="topbar__item btn btn--primary btn--small">Button</a>
      </div>
    </div>
  </header>
`;
