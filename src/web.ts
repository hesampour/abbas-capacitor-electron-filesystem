import { WebPlugin } from '@capacitor/core';

import type { CapacitorElectronPluginPlugin } from './definitions';

export class CapacitorElectronPluginWeb extends WebPlugin implements CapacitorElectronPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
