// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from 'buffer'
import { parse } from './parse'
import { formatResult } from './format'

/**
 * Get the recipe from a Fujifilm maker note.
 * @param makerNote - The maker note as a buffer.
 */
export function getRecipe(makerNote: Buffer | number[]) {
  const buffer = Array.isArray(makerNote) ? Buffer.from(makerNote) : makerNote
  return formatResult(parse(buffer))
}

export default getRecipe
