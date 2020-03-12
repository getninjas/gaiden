export default {
  title: 'Components | Message',
  parameters: {
    componentSubtitle: 'Message is used to pass information to the user, be it neutral, positive, alert and negative.',
  },
};

import infoIcon from '../../../../public/images/icon/info.svg';
import infoSuccessIcon from '../../../../public/images/icon/info-success.svg';
import infoAlertIcon from '../../../../public/images/icon/info-alert.svg';
import infoNegativeIcon from '../../../../public/images/icon/info-negative.svg';
import './_index.scss';

export const messageNeutral = () => `
  <div class="docs">
    <div class="shape message">
      <div class="message__icon">
        <img src=${infoIcon} />
      </div>
      <div class="message__content">
        <span class="message__title">Message Title</span>
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messageNeutralWithoutTitle = () => `
  <div class="docs">
    <div class="shape message">
      <div class="message__icon">
        <img src=${infoIcon} />
      </div>
      <div class="message__content">
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messagePositve = () => `
  <div class="docs">
    <div class="shape shape--positive message message--positive">
      <div class="message__icon">
        <img src=${infoSuccessIcon} />
      </div>
      <div class="message__content">
        <span class="message__title">Success!</span>
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messagePositveWithoutTitle = () => `
  <div class="docs">
    <div class="shape shape--positive message message--positive">
      <div class="message__icon">
        <img src=${infoSuccessIcon} />
      </div>
      <div class="message__content">
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messageAlert = () => `
  <div class="docs">
    <div class="shape shape--alert message message--alert">
      <div class="message__icon">
        <img src=${infoAlertIcon} />
      </div>
      <div class="message__content">
        <span class="message__title">Attention!</span>
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messageAlertWithoutTitle = () => `
  <div class="docs">
    <div class="shape shape--alert message message--alert">
      <div class="message__icon">
        <img src=${infoAlertIcon} />
      </div>
      <div class="message__content">
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messageNegative = () => `
  <div class="docs">
    <div class="shape shape--negative message message--negative">
      <div class="message__icon">
        <img src=${infoNegativeIcon} />
      </div>
      <div class="message__content">
        <span class="message__title">Error!</span>
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;

export const messageNegativeWithoutTitle = () => `
  <div class="docs">
    <div class="shape shape--negative message message--negative">
      <div class="message__icon">
        <img src=${infoNegativeIcon} />
      </div>
      <div class="message__content">
        <p class="message__text">Message text complementation the content title card</p>
      </div>
    </div>
  </div>
`;
