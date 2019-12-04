export default {
  title: 'Components | Caption',
  parameters: {
    componentSubtitle: 'Caption are used for minor text.',
  },
};

import './_index.scss';

export const allCaptions = () => `
  <div>
    <h1 class="caption caption--dark">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
    </div>
    <div>
    <h1 class="caption caption--medium">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
    </div>
    <div>
    <h1 class="caption caption--positive">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
    </div>
    <div>
    <h1 class="caption caption--alert">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
    </div>
    <div>
    <h1 class="caption caption--negative">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
`;

export const Dark = () => '<h1 class="caption caption--dark">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Medium = () => '<h1 class="caption caption--medium">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Positive = () => '<h1 class="caption caption--positive">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Alert = () => '<h1 class="caption caption--alert">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Negative = () => '<h1 class="caption caption--negative">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';

export const Inverse = () =>`
  <div style="background-color: #000">
    <h1 class="caption caption--inverse">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>
  </div>
`;

export const Strong = () =>
'<h1 class="caption caption--positive caption--strong">Milhares de profissionais avaliados por clientes, permitindo você negociar apenas com os melhores.</h1>';
