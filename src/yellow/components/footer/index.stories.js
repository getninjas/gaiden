export default {
  title: 'Components | Footer',
  parameters: {
    componentSubtitle: 'Page footer with componentes',
  },
};

import './_index.scss';

export const Footer = () => `
  <div class="docs">
    <div class="footer">
      <div class="footer--press">
        <h3 class="listing__title listing__wrapper--stacked">Título 1</h3>
        <ul class="list">
          <li class="list__item">
            <a href="#" class="list__link">Item 1</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 2</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 3</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 4</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 4</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 4</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 4</a>
          </li>
        </ul>
      </div>
      <div class="footer--press">
        <h3 class="listing__title listing__wrapper--stacked">Título 2</h3>
        <ul class="list">
          <li class="list__item">
            <a href="#" class="list__link">Item 1</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 2</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 3</a>
          </li>
          <li class="list__item">
            <a href="#" class="list__link">Item 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;
