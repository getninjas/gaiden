export default {
  title: 'Components | Highlight',
  parameters: {
    componentSubtitle: 'Highlight emphasizes some part or the text.',
  },
};

import './_index.scss';

export const allHighlight = () => `
  <div>
    <h1 class="highlight highlight--l">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
  <div>
    <h1 class="highlight highlight--m">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
  <div>
    <h1 class="highlight highlight--s">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
`;

export const Large = () => '<h1 class="highlight highlight--l">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Medium = () => '<h1 class="highlight highlight--m">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Small = () => '<h1 class="highlight highlight--s">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const LargeInverse = () =>`
  <div style="background-color: #000">
    <h1 class="highlight highlight--l highlight--inverse">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
`;
