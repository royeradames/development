import tailwindConfig from '../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

// theme colors are defined in the preset imported by the lab tailwind config
const { presets } = resolveConfig(tailwindConfig)
const presetsColors = presets[0].default.theme.colors

export { presetsColors as twColors }
