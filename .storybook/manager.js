import '@crowdstrike/glide-core/styles/fonts.css';
import '@crowdstrike/glide-core/styles/variables.css';

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'dark',
    fontBase: '"Nunito", sans-serif',
    fontCode: 'monospace',
  }),
});
