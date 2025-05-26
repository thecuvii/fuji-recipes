# Fuji Recipes Parser

A TypeScript library to extract Fujifilm camera recipe data from EXIF maker notes.

## Overview

This library parses Fujifilm camera maker notes from EXIF data to extract film simulation recipes and camera settings. It supports extracting various parameters like film mode, grain effects, color settings, white balance, dynamic range, and tone adjustments.

## Installation

```bash
pnpm add fuji-recipes
```

## Usage

### Basic Usage

```typescript
import getRecipe from 'fuji-recipes'

const makerNote = [] // You can get makerNote using exifr or other tools.
const recipe = getRecipe(makerNote)
```

### Real-world Usage with EXIF Extraction

To extract maker notes from actual photos, you'll need an EXIF parsing library like `exifr`:

```bash
npm install exifr
```

```typescript
import fs from 'node:fs/promises'
import exifr from 'exifr'
import getRecipe from 'fuji-recipes'

async function extractRecipeFromPhoto(photoPath: string) {
  const photo = await fs.readFile(photoPath)
  const exif = await exifr.parse(photo, { makerNote: true })

  if (exif.makerNote) {
    const recipe = getRecipe(exif.makerNote)
    return recipe
  }

  throw new Error('No maker note found in the photo')
}

// Usage
const recipe = await extractRecipeFromPhoto('./fuji-photo.jpg')
console.log(recipe)
```

### Example Output

```javascript
{
  FilmMode: 'Classic Chrome',
  GrainEffectRoughness: 'Off',
  GrainEffectSize: 'Off',
  ColorChromeEffect: 'Off',
  ColorChromeFxBlue: 'Strong',
  WhiteBalance: '5500K',
  Red: '-1',
  Blue: '+1',
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

- **FilmMode**: Film simulation mode
- **GrainEffectRoughness**: Grain effect intensity
- **GrainEffectSize**: Grain size
- **ColorChromeEffect**: Color chrome effect setting
- **ColorChromeFxBlue**: Blue color chrome effect
- **WhiteBalance**: White balance setting
- **Red**: Red white balance fine-tune
- **Blue**: Blue white balance fine-tune
- **DynamicRange**: Dynamic range setting
- **HighlightTone**: Highlight tone adjustment
- **ShadowTone**: Shadow tone adjustment
- **Saturation**: Color saturation adjustment
- **Sharpness**: Sharpness setting
- **NoiseReduction**: Noise reduction level
- **Clarity**: Clarity adjustment

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
