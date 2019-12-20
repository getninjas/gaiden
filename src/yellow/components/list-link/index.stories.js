export default {
  title: 'Components | List Link',
  parameters: {
    componentSubtitle: 'Quote give italic attribute to font.',
  },
};

import './_index.scss';

export const listLink = () => `
  <div class="docs">
    <div class="listing">
      <h3 class="listing__title">Título</h3>
      <div class="listing__wrapper">
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

export const listLinkHalf = () => `
  <div class="docs">
    <div class="listing">
      <h3 class="listing__title">Título</h3>
      <div class="listing__wrapper">
        <ul class="list list--half">
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
        <ul class="list list--half">
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
