export default {
  title: 'Components | Shape',
  parameters: {
    componentSubtitle: 'Shapes is used in cards',
  },
};

import './_index.scss';

export const shape = () => `
  <div class="docs">
    <div class="shape">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;

export const shapeClickable = () => `
  <div class="docs">
    <div class="shape shape--clickable">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;

export const shapePositive = () => `
  <div class="docs">
    <div class="shape shape--positive">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;

export const shapeAlert = () => `
  <div class="docs">
    <div class="shape shape--alert">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;

export const shapeNegative = () => `
  <div class="docs">
    <div class="shape shape--negative">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;

export const shapeMediumRadius = () => `
  <div class="docs">
    <div class="shape shape--medium-radius">
      <div style="height: 100px; width: 100px;"></div>
    </div>
  </div>
`;
