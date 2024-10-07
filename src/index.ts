// eslint-disable-next-line unicorn/prefer-node-protocol
import type { Buffer } from 'buffer'
import { parse } from './parse'
import { formatResult } from './format'

export function parseFujifilmMakerNote(bytes: Buffer) {
  return formatResult(parse(bytes))
}

export default parseFujifilmMakerNote
