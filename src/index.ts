import { registerPlugin } from '@capacitor/core';

import type { CapacitorElectronPluginPlugin } from './definitions';

const CapacitorElectronPlugin = registerPlugin<CapacitorElectronPluginPlugin>('CapacitorElectronPlugin', {
  web: () => import('./web').then(m => new m.CapacitorElectronPluginWeb()),
});

export * from './definitions';
export { CapacitorElectronPlugin };
