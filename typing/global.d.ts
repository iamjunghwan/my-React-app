declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
    lastBuildTimeMs: number;
    envPrefix: string;
  };

  type Nullable<T> = T | null;
  type Recordable<T = any> = Record<string, T>;

  interface ViteEnv {
    [key: string]: any;
  }

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  interface GenericType {
    [key: string]: any;
  }
}

export {};
