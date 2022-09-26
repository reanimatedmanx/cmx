import { createSystem, initConfig } from '../system';
import { BaseKeystoneTypeInfo, KeystoneConfig, KeystoneContext } from '../types';

export function getContext<TypeInfo extends BaseKeystoneTypeInfo>(
  config: KeystoneConfig<TypeInfo>,
  PrismaModule: unknown
): {
  context: KeystoneContext<TypeInfo>;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
} {
  const system = createSystem(initConfig(config));
  const { connect, createContext, disconnect } = system.getKeystone(PrismaModule as any);
  return {
    context: createContext(),
    connect,
    disconnect,
  };
}