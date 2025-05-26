// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from 'buffer'
import { parse } from './parse'
import { format } from './format'

/**
 * Get the recipe from a Fujifilm maker note.
 * @param makerNote - The maker note as a buffer.
 */
export function getRecipe(makerNote: Buffer | number[]) {
  const buffer = Buffer.isBuffer(makerNote) ? makerNote : Buffer.from(makerNote)
  return format(parse(buffer))
}

export default getRecipe
