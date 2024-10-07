// https://exiftool.org/TagNames/FujiFilm.html

export const TAG_ID_FILM_MODE = 0x1401
export const FILM_MODE_VALUES = {
  0x0: 'F0/Standard (Provia)',
  0x100: 'F1/Studio Portrait',
  0x110: 'F1a/Studio Portrait Enhanced Saturation',
  0x120: 'F1b/Studio Portrait Smooth Skin Tone (Astia)',
  0x130: 'F1c/Studio Portrait Increased Sharpness',
  0x200: 'F2/Fujichrome (Velvia)',
  0x300: 'F3/Studio Portrait Ex',
  0x400: 'F4/Velvia',
  0x500: 'Pro Neg. Std',
  0x501: 'Pro Neg. Hi',
  0x600: 'Classic Chrome',
  0x700: 'Eterna',
  0x800: 'Classic Negative',
  0x900: 'Bleach Bypass',
  0xA00: 'Nostalgic Neg',
  0xB00: 'Reala ACE',
} as const

export const TAG_ID_GRAIN_EFFECT_ROUGHNESS = 0x1047
export const GRAIN_EFFECT_ROUGHNESS_VALUES = {
  0x0: 'Off',
  0x20: 'Weak',
  0x40: 'Strong',
} as const

export const TAG_ID_GRAIN_EFFECT_SIZE = 0x104C
export const GRAIN_EFFECT_SIZE_VALUES = {
  0x0: 'Off',
  0x10: 'Small',
  0x20: 'Large',
} as const

export const TAG_ID_COLOR_CHROME_EFFECT = 0x1048
export const COLOR_CHROME_EFFECT_VALUES = {
  0x0: 'Off',
  0x20: 'Weak',
  0x40: 'Strong',
} as const

export const TAG_ID_COLOR_CHROME_FX_BLUE = 0x104E
export const COLOR_CHROME_FX_BLUE_VALUES = {
  0x0: 'Off',
  0x20: 'Weak',
  0x40: 'Strong',
} as const

export const TAG_ID_WHITE_BALANCE = 0x1002
export const WHITE_BALANCE_VALUES = {
  0x0: 'Auto',
  0x1: 'Auto (white priority)',
  0x2: 'Auto (ambiance priority)',
  0x100: 'Daylight',
  0x200: 'Cloudy',
  0x300: 'Daylight Fluorescent',
  0x301: 'Day White Fluorescent',
  0x302: 'White Fluorescent',
  0x303: 'Warm White Fluorescent',
  0x304: 'Living Room Warm White Fluorescent',
  0x400: 'Incandescent',
  0x500: 'Flash',
  0x600: 'Underwater',
  0xF00: 'Custom',
  0xF01: 'Custom2',
  0xF02: 'Custom3',
  0xF03: 'Custom4',
  0xF04: 'Custom5',
  0xFF0: 'Kelvin',
} as const

export const TAG_ID_COLOR_TEMPERATURE = 0x1005

export const TAG_ID_WHITE_BALANCE_FINE_TUNE = 0x100A

export const TAG_ID_DYNAMIC_RANGE_SETTING = 0x1402
export const DYNAMIC_RANGE_SETTING_VALUES = {
  0x0: 'Auto',
  0x1: 'Manual',
  0x100: 'Standard (100%)',
  0x200: 'Wide1 (230%)',
  0x201: 'Wide2 (400%)',
  0x8000: 'Film Simulation',
} as const

export const TAG_ID_DEVELOPMENT_DYNAMIC_RANGE = 0x1403

export const TAG_ID_HIGHLIGHT_TONE = 0x1041
export const TONE_VALUES = {
  '-64': '+4',
  '-48': '+3',
  '-32': '+2',
  '-16': '+1',
  '0': '0',
  '16': '-1',
  '32': '-2',
} as const

export const TAG_ID_SHADOW_TONE = 0x1040

export const TAG_ID_SATURATION = 0x1003
export const SATURATION_VALUES = {
  0x0: '0',
  0x80: '+1',
  0xC0: '+3',
  0xE0: '+4',
  0x100: '+2',
  0x180: '-1',
  0x400: '-2',
  0x4C0: '-3',
  0x4E0: '-4',
  0x200: 'Low',
  0x300: 'None (B&W)',
  0x301: 'B&W Red Filter',
  0x302: 'B&W Yellow Filter',
  0x303: 'B&W Green Filter',
  0x310: 'B&W Sepia',

  0x500: 'Acros',
  0x501: 'Acros Red Filter',
  0x502: 'Acros Yellow Filter',
  0x503: 'Acros Green Filter',
  0x8000: 'Film Simulation',
}

export const TAG_ID_SHARPNESS = 0x1001
export const SHARPNESS_VALUES = {
  0x0: '-4',
  0x1: '-3',
  0x2: '-2',
  0x3: '0',
  0x4: '+2',
  0x5: '+3',
  0x6: '+4',
  0x82: '-1',
  0x84: '+1',
  0x8000: 'Film Simulation',
  0xFFFF: 'n/a',
} as const

export const TAG_ID_NOISE_REDUCTION = 0x100E
export const NOISE_REDUCTION_VALUES = {
  0x0: '0',
  0x100: '+2',
  0x180: '+1',
  0x1C0: '+3',
  0x1E0: '+4',
  0x200: '-2',
  0x280: '-1',
  0x2C0: '-3',
  0x2E0: '-4',
} as const

export const TAG_ID_CLARITY = 0x100F
export const CLARITY_VALUES = {
  '-5000': '-5',
  '-4000': '-4',
  '-3000': '-3',
  '-2000': '-2',
  '-1000': '-1',
  '0': '0',
  '1000': '+1',
  '2000': '+2',
  '3000': '+3',
} as const
