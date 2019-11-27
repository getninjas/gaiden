export default {
  title: 'Components | Subtitle',
  parameters: {
    componentSubtitle: 'Subtitles are used next to Heading as supporting text',
  },
};

import './index.scss';

export const allSubTitle = () => `
  <div class="space-docs">
    <small class="subtitle subtitle--l">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>
  </div>
  <div class="space-docs">
    <small class="subtitle subtitle--m">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>
  </div>
  <div class="space-docs">
    <small class="subtitle subtitle--s">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>
  </div>
`;

export const Large = () => '<small class="subtitle subtitle--l">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>';

export const Medium = () => '<small class="subtitle subtitle--m">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>';

export const Small = () => '<small class="subtitle subtitle--s">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>';

export const LargeInverse = () =>`
  <div style="background-color: #000">
    <small class="subtitle subtitle--l subtitle--inverse">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</small>
  </div>
`;
