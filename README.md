# Fuji Recipes Parser

A TypeScript library to extract Fujifilm camera recipe data from EXIF maker notes.

## Overview

This library parses Fujifilm camera maker notes from EXIF data to extract film simulation recipes and camera settings. It supports extracting various parameters like film mode, grain effects, color settings, white balance, dynamic range, and tone adjustments.

## Installation

```bash
npm install fuji-recipes-parser
```

```bash
pnpm add fuji-recipes-parser
```

```bash
yarn add fuji-recipes-parser
```

## Usage

### Basic Usage

```typescript
import getRecipe, { } from 'fuji-recipes-parser'
// or
import getRecipe from 'fuji-recipes-parser'

// From a Buffer
const makerNote = Buffer.from([/* maker note bytes */])
const recipe = getRecipe(makerNote)

// From a number array
const makerNoteArray = [/* maker note bytes as numbers */]
const recipe = getRecipe(makerNoteArray)
```

### Example Output

```typescript
{
  FilmMode: 'Classic Chrome',
  GrainEffectRoughness: 'Off',
  GrainEffectSize: 'Off',
  ColorChromeEffect: 'Off',
  ColorChromeFxBlue: 'Strong',
  WhiteBalance: '5500K',
  Red: '-6',
  Blue: '+6',
  DynamicRange: 'DR400',
  HighlightTone: '-1',
  ShadowTone: '-1',
  Saturation: '+1',
  Sharpness: '0',
  NoiseReduction: '0',
  Clarity: '0'
}
```

## Supported Parameters

The library extracts the following camera settings:

- **FilmMode**: Film simulation mode (e.g., 'Classic Chrome', 'Classic Negative')
- **GrainEffectRoughness**: Grain effect intensity ('Off', 'Weak', 'Strong')
- **GrainEffectSize**: Grain size ('Off', 'Small', 'Large')
- **ColorChromeEffect**: Color chrome effect setting ('Off', 'Weak', 'Strong')
- **ColorChromeFxBlue**: Blue color chrome effect ('Off', 'Weak', 'Strong')
- **WhiteBalance**: White balance setting (e.g., 'Daylight', '5500K')
- **Red**: Red white balance fine-tune (e.g., '-6', '+8')
- **Blue**: Blue white balance fine-tune (e.g., '+6', '-14')
- **DynamicRange**: Dynamic range setting ('DR100', 'DR200', 'DR400')
- **HighlightTone**: Highlight tone adjustment (-2 to +4)
- **ShadowTone**: Shadow tone adjustment (-2 to +4)
- **Saturation**: Color saturation adjustment (-4 to +4)
- **Sharpness**: Sharpness setting (-4 to +4)
- **NoiseReduction**: Noise reduction level (-4 to +4)
- **Clarity**: Clarity adjustment (-5 to +5)

## API Reference

### `getRecipe(makerNote: Buffer | number[])`

Extracts recipe data from a Fujifilm maker note.

**Parameters:**
- `makerNote`: The maker note data as a Buffer or array of numbers

**Returns:**
- An object containing the extracted recipe parameters

## Development

### Prerequisites

- Node.js 16+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the library
pnpm build
```

### Testing

The library includes comprehensive tests with real maker note data:

```bash
pnpm test
```

## License

MIT

## Author

cuvii <i@cuvii.dev>

## Keywords

- fuji
- fujifilm
- exif
- makernote
- film simulation
- camera recipes
