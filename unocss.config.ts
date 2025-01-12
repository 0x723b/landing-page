import type { Theme } from 'unocss/preset-mini'
import { presetIcons, presetUno, transformerVariantGroup } from 'unocss'
import { defineConfig } from 'unocss/vite'

const features = [
  'calt',
  'zero',
  'cv01',
  'cv02',
  'cv03',
  'cv04',
  'cv31',
  'cv32',
  'cv33',
  'cv34',
  'cv35',
  'cv36',
  'cv96',
  'cv97',
  'cv98',
  'cv99',
  'ss01',
  'ss02',
  'ss03',
  'ss04',
  'ss05',
  'ss06',
  'ss07',
  'ss08',
]
export default defineConfig<Theme>({
  presets: [
    presetUno({
      preflight: 'on-demand',
    }),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    fontFamily: {
      maple: 'MapleMono',
    },
  },
  preflights: [
    {
      getCSS: () => {
        const getSrc = (isItalic?: boolean) => {
          return [
            `url('/fonts/MapleMono${isItalic ? '-Italic' : ''}[wght]-VF.woff2') format('woff2')`,
            'local("Maple Mono")',
            'local("Maple Mono NF")',
            'local("Maple Mono NF CN")',
          ].join(', ')
        }
        const base = `
            font-family: MapleMono;
            font-display: swap;
            font-style: normal;
        `
        return `
          .font-maple {
            font-feature-settings: ${features.map(fea => `"${fea}" var(--ffs-${fea})`).join(', ')};
          }
          @font-face {
            ${base}
            src: ${getSrc()};
          }
          @font-face {
            ${base}
            src: ${getSrc(true)};
          }
        `
      },
    },
  ],
})
