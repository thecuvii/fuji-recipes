import fs from 'node:fs/promises'
import exifr from 'exifr'
import { getRecipe } from '../src'

const photo = await fs.readFile('./photo.avif')
exifr.parse(photo)
  // eslint-disable-next-line no-console
  .then(output => console.log(getRecipe(output)))
