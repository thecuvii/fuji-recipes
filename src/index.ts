// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from 'buffer'
import { format } from './format'
import { parse } from './parse'

/**
 * Get the recipe from a Fujifilm maker note.
 * @param makerNote - The maker note as a buffer.
 */
export function getRecipe(makerNote: Buffer | number[]) {
  const buffer = Buffer.isBuffer(makerNote) ? makerNote : Buffer.from(makerNote)
  return format(parse(buffer))
}

export default getRecipe
