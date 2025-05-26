import type { DynamicRangeSetting, WhiteBalance, WhiteBalanceFineTune } from './constants'
import type { parse } from './parse'
import { DYNAMIC_RANGE_SETTING_VALUES, TAG_ID_CLARITY, TAG_ID_COLOR_CHROME_EFFECT, TAG_ID_COLOR_CHROME_FX_BLUE, TAG_ID_COLOR_TEMPERATURE, TAG_ID_DEVELOPMENT_DYNAMIC_RANGE, TAG_ID_DYNAMIC_RANGE_SETTING, TAG_ID_FILM_MODE, TAG_ID_GRAIN_EFFECT_ROUGHNESS, TAG_ID_GRAIN_EFFECT_SIZE, TAG_ID_HIGHLIGHT_TONE, TAG_ID_NOISE_REDUCTION, TAG_ID_SATURATION, TAG_ID_SHADOW_TONE, TAG_ID_SHARPNESS, TAG_ID_WHITE_BALANCE, TAG_ID_WHITE_BALANCE_FINE_TUNE, WHITE_BALANCE_VALUES } from './constants'
import { tags } from './tags'

export function format(parsed: ReturnType<typeof parse>) {
  if (!parsed.FilmMode) {
    return null
  }

  const result = {
    [tags[TAG_ID_FILM_MODE].name]: parsed.FilmMode,
    [tags[TAG_ID_GRAIN_EFFECT_ROUGHNESS].name]: parsed.GrainEffectRoughness,
    [tags[TAG_ID_GRAIN_EFFECT_SIZE].name]: parsed.GrainEffectSize,
    [tags[TAG_ID_COLOR_CHROME_EFFECT].name]: parsed.ColorChromeEffect,
    [tags[TAG_ID_COLOR_CHROME_FX_BLUE].name]: parsed.ColorChromeFxBlue,
    [tags[TAG_ID_WHITE_BALANCE].name]: parsed.WhiteBalance as WhiteBalance | `${number}K`,
    Red: '0' as WhiteBalanceFineTune,
    Blue: '0' as WhiteBalanceFineTune,
    DynamicRange: parsed.DynamicRangeSetting as DynamicRangeSetting | 'DR100' | 'DR200' | 'DR400',
    [tags[TAG_ID_HIGHLIGHT_TONE].name]: parsed.HighlightTone,
    [tags[TAG_ID_SHADOW_TONE].name]: parsed.ShadowTone,
    [tags[TAG_ID_SATURATION].name]: parsed.Saturation,
    [tags[TAG_ID_SHARPNESS].name]: parsed.Sharpness,
    [tags[TAG_ID_NOISE_REDUCTION].name]: parsed.NoiseReduction,
    [tags[TAG_ID_CLARITY].name]: parsed.Clarity,
  }

  const whiteBalanceFineTuneName = tags[TAG_ID_WHITE_BALANCE_FINE_TUNE].name
  const whiteBalanceFineTune = parsed[whiteBalanceFineTuneName]
  if (whiteBalanceFineTune) {
    result.Red = formatWhiteBalanceFineTune(whiteBalanceFineTune[0] as number)
    result.Blue = formatWhiteBalanceFineTune(whiteBalanceFineTune[1] as number)
  }

  const whiteBalanceName = tags[TAG_ID_WHITE_BALANCE].name
  const whiteBalance = parsed[whiteBalanceName]
  const colorTemperatureName = tags[TAG_ID_COLOR_TEMPERATURE].name
  const colorTemperature = parsed[colorTemperatureName]
  if (whiteBalance === WHITE_BALANCE_VALUES['4080']) {
    result.WhiteBalance = `${colorTemperature}K`
  }

  const dynamicRangeSettingName = tags[TAG_ID_DYNAMIC_RANGE_SETTING].name
  const dynamicRangeSetting = parsed[dynamicRangeSettingName]
  const developmentRangeName = tags[TAG_ID_DEVELOPMENT_DYNAMIC_RANGE].name
  const developmentRange = parsed[developmentRangeName]
  if (dynamicRangeSetting === DYNAMIC_RANGE_SETTING_VALUES[1]) {
    result.DynamicRange = `DR${developmentRange}` as any
  }

  return result
}

function formatWhiteBalanceFineTune(value: number) {
  return (value > 0 ? `+${value / 10}` : `${value / 10}`) as WhiteBalanceFineTune
}
