export default {
  title: 'Components | Subtitle',
  parameters: {
    componentSubtitle: 'Subtitles are used next to Heading as supporting text',
  },
};

import './index.scss';

export const allSubTitle = () => `
  <div>
    <small class="subtitle subtitle--l">Hello World</small>
  </div>
  <div>
    <small class="subtitle subtitle--m">Hello World</small>
  </div>
  <div>
    <small class="subtitle subtitle--s">Hello World</small>
  </div>
`;

export const Large = () => '<small class="subtitle subtitle--l">Hello World</small>';

export const Medium = () => '<small class="subtitle subtitle--m">Hello World</small>';

export const Small = () => '<small class="subtitle subtitle--s">Hello World</small>';

export const LargeInverse = () =>`
  <div style="background-color: #000">
    <small class="subtitle subtitle--l subtitle--inverse">Hello World</small>
  </div>
`;
