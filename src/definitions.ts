export interface CapacitorElectronPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
