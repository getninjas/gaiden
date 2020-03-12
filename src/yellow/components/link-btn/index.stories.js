export default {
  title: 'Components | Link',
  parameters: {
    componentSubtitle: 'Link is used in link to others pages.',
  },
};

import './_index.scss';

export const allLinks = () => `
  <div class="docs">
    <a class="link-btn">Link</h1>
  </div>
  <div class="docs docs--inverse">
    <a class="link-btn link-btn--inverse">Link</h1>
  </div>
  <div class="docs">
    <a class="link-btn link-btn--large">Link</h1>
  </div>
  <div class="docs docs--inverse">
    <a class="link-btn link-btn--large link-btn--inverse">Link</h1>
  </div>
`;

export const link = () => `
  <div class="docs">
    <a class="link-btn">Link</h1>
  </div>
`;

export const linkInverse = () => `
  <div class="docs docs--inverse">
    <a class="link-btn link-btn--inverse">Link</h1>
  </div>
`;

export const linkLarge = () => `
  <div class="docs">
    <a class="link-btn link-btn--large">Link</h1>
  </div>
`;

export const linkLargeInverse = () => `
  <div class="docs docs--inverse">
    <a class="link-btn link-btn--large link-btn--inverse">Link</h1>
  </div>
`;
