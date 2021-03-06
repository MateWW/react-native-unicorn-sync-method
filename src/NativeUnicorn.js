// @flow
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): Promise<number>;
  add(a: number, b: number): number;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Unicorn'): ?Spec);
