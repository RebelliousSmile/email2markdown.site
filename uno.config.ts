import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [{ name: 'Inter', weights: ['300', '400', '500', '600', '700', '800', '900'] }],
      },
    }),
  ],
  theme: {
    colors: {
      surface: '#FAFAF8',
      'surface-alt': '#F3F1EE',
      'surface-hover': '#EBE8E4',
      ink: '#2C2825',
      'ink-muted': '#8C8580',
      'ink-dim': '#B0AAA4',
      brand: '#5B8C6F',
      'brand-light': '#e8f0eb',
      action: '#E07A5F',
      source: '#7B8FA3',
      result: '#7BC4A8',
      danger: '#C45B5B',
      sep: '#DDD9D4',
      'sep-light': '#ECEAE6',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
    },
  },
  shortcuts: {
    'text-8px': 'text-[8px]',
    'text-9px': 'text-[9px]',
    'text-10px': 'text-[10px]',
    'text-11px': 'text-[11px]',
    'text-12px': 'text-[12px]',
  },
})