import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';
import Inspect from 'vite-plugin-inspect';
import setupAutoImport from './plugins/setupAutoImport.ts';
import setupIcon from './plugins/setupIcon.ts';

export default function setupVitePlugins(
  viteEnv: ViteEnv,
  isBuild: boolean
): (PluginOption | PluginOption[])[] {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    react({
      include: [/\.ts$/, /\.tsx$/, /\.md$/]
    }),
    qrcode()
  ];

  vitePlugins.push(setupAutoImport());
  vitePlugins.push(setupIcon());
  vitePlugins.push(Inspect());

  return vitePlugins;
}
