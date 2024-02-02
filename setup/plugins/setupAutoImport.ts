import AutoImport from 'unplugin-auto-import/vite';
import IconResolver from 'unplugin-icons/resolver';

export default function setupAutoImport(): any {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.md$/ // .md
    ],
    imports: ['react', 'react-router-dom', 'react-i18next'],
    dts: 'setup/plugins/auto-import-dependencies.d.ts',
    dirs: [
      // "src/apis/**",
      // "src/common/constants/**",
      // "src/common/utils/**",
      // "src/store/modules/**",
      // "src/components/ThemeChanger/**.ts",
      // "setup/ioc/**.ts"
      'src/store/**.ts',
      'src/common/utils/**'
    ],
    resolvers: [
      IconResolver({
        prefix: 'sr-icon',
        customCollections: ['local', 'data']
      })
      // PrimeReactResolver()
    ],
    vueTemplate: false,
    eslintrc: {
      enabled: true // <-- this
    }
  });
}
