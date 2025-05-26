import fs from 'node:fs/promises'
import { join } from 'node:path'
import exifr from 'exifr'
import { getRecipe } from '../src'

(async () => {
  const photo = await fs.readFile(join(__dirname, './photo.jpg'))
  exifr.parse(photo, { makerNote: true })
    .then((exif) => {
      const makerNote = exif.makerNote
      // eslint-disable-next-line no-console
      console.log(getRecipe(makerNote))
    })
})()
