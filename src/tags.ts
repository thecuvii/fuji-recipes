// eslint-disable-next-line unicorn/prefer-node-protocol
import type { Buffer } from 'buffer'
import { CLARITY_VALUES, COLOR_CHROME_EFFECT_VALUES, COLOR_CHROME_FX_BLUE_VALUES, DYNAMIC_RANGE_SETTING_VALUES, FILM_MODE_VALUES, GRAIN_EFFECT_ROUGHNESS_VALUES, GRAIN_EFFECT_SIZE_VALUES, NOISE_REDUCTION_VALUES, SATURATION_VALUES, SHARPNESS_VALUES, TAG_ID_CLARITY, TAG_ID_COLOR_CHROME_EFFECT, TAG_ID_COLOR_CHROME_FX_BLUE, TAG_ID_COLOR_TEMPERATURE, TAG_ID_DEVELOPMENT_DYNAMIC_RANGE, TAG_ID_DYNAMIC_RANGE_SETTING, TAG_ID_FILM_MODE, TAG_ID_GRAIN_EFFECT_ROUGHNESS, TAG_ID_GRAIN_EFFECT_SIZE, TAG_ID_HIGHLIGHT_TONE, TAG_ID_NOISE_REDUCTION, TAG_ID_SATURATION, TAG_ID_SHADOW_TONE, TAG_ID_SHARPNESS, TAG_ID_WHITE_BALANCE, TAG_ID_WHITE_BALANCE_FINE_TUNE, TONE_VALUES, WHITE_BALANCE_VALUES } from './constants'

type Parser = (input: number, buffer: Buffer) => any

export const tags = {
  [TAG_ID_FILM_MODE]: {
    name: 'FilmMode' as const,
    parser: input => FILM_MODE_VALUES[input as keyof typeof FILM_MODE_VALUES],
  },
  [TAG_ID_GRAIN_EFFECT_ROUGHNESS]: {
    name: 'GrainEffectRoughness' as const,
    parser: input => GRAIN_EFFECT_ROUGHNESS_VALUES[input as keyof typeof GRAIN_EFFECT_ROUGHNESS_VALUES],
  },
  [TAG_ID_GRAIN_EFFECT_SIZE]: {
    name: 'GrainEffectSize' as const,
    parser: input => GRAIN_EFFECT_SIZE_VALUES[input as keyof typeof GRAIN_EFFECT_SIZE_VALUES],
  },
  [TAG_ID_COLOR_CHROME_EFFECT]: {
    name: 'ColorChromeEffect' as const,
    parser: input => COLOR_CHROME_EFFECT_VALUES[input as keyof typeof COLOR_CHROME_EFFECT_VALUES],
  },
  [TAG_ID_COLOR_CHROME_FX_BLUE]: {
    name: 'ColorChromeFxBlue' as const,
    parser: input => COLOR_CHROME_FX_BLUE_VALUES[input as keyof typeof COLOR_CHROME_FX_BLUE_VALUES],
  },
  [TAG_ID_WHITE_BALANCE]: {
    name: 'WhiteBalance' as const,
    parser: input => WHITE_BALANCE_VALUES[input as keyof typeof WHITE_BALANCE_VALUES],
  },
  [TAG_ID_COLOR_TEMPERATURE]: {
    name: 'ColorTemperature' as const,
    parser: input => input,
  },
  [TAG_ID_WHITE_BALANCE_FINE_TUNE]: {
    name: 'WhiteBalanceFineTune' as const,
    parser: (input, buffer) => {
      return [buffer.readInt32LE(input), buffer.readInt32LE(input + 4)]
    },
  },
  [TAG_ID_DYNAMIC_RANGE_SETTING]: {
    name: 'DynamicRangeSetting' as const,
    parser: input => DYNAMIC_RANGE_SETTING_VALUES[input as keyof typeof DYNAMIC_RANGE_SETTING_VALUES],
  },
  [TAG_ID_DEVELOPMENT_DYNAMIC_RANGE]: {
    name: 'DevelopmentDynamicRange' as const,
    parser: input => input,
  },
  [TAG_ID_HIGHLIGHT_TONE]: {
    name: 'HighlightTone' as const,
    parser: input => TONE_VALUES[input as unknown as keyof typeof TONE_VALUES],
  },
  [TAG_ID_SHADOW_TONE]: {
    name: 'ShadowTone' as const,
    parser: input => TONE_VALUES[input as unknown as keyof typeof TONE_VALUES],
  },
  [TAG_ID_SATURATION]: {
    name: 'Saturation' as const,
    parser: input => SATURATION_VALUES[input as keyof typeof SATURATION_VALUES],
  },
  [TAG_ID_SHARPNESS]: {
    name: 'Sharpness' as const,
    parser: input => SHARPNESS_VALUES[input as keyof typeof SHARPNESS_VALUES],
  },
  [TAG_ID_NOISE_REDUCTION]: {
    name: 'NoiseReduction' as const,
    parser: input => NOISE_REDUCTION_VALUES[input as keyof typeof NOISE_REDUCTION_VALUES],
  },
  [TAG_ID_CLARITY]: {
    name: 'Clarity' as const,
    parser: input => CLARITY_VALUES[input as unknown as keyof typeof CLARITY_VALUES],
  },
} satisfies Record<string, { name: string, parser: Parser }>

export type TagName = typeof tags extends Record<string, { name: infer N }> ? N : never
