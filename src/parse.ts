// eslint-disable-next-line unicorn/prefer-node-protocol
import type { Buffer } from 'buffer'
import { type ParsedTags, type TagName, tags } from './tags'

export function parse(makerNote: Buffer) {
  const result: Record<TagName, any> = {} as any
  parseFujifilmMakerNote(makerNote, (tagId, value) => {
    const tag = tags[tagId as keyof typeof tags]
    if (tag) {
      const parsedValue = tag.parser(value, makerNote)
      result[tag.name] = parsedValue
    }
  })

  return result as ParsedTags
}

const BYTE_INDEX_TAG_COUNT = 12
const BYTE_INDEX_FIRST_TAG = 14
const BYTES_PER_TAG = 12
const BYTE_OFFSET_TAG_TYPE = 2
const BYTE_OFFSET_TAG_VALUE = 8

function parseFujifilmMakerNote(bytes: Buffer, valueForTagUInt: (tagId: number, value: number) => void) {
  const tagCount = bytes.readUInt16LE(BYTE_INDEX_TAG_COUNT)
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  for (let i = 0; i < tagCount; i++) {
    const index = BYTE_INDEX_FIRST_TAG + i * BYTES_PER_TAG
    if (index + BYTES_PER_TAG < bytes.length) {
      const tagId = view.getUint16(index, true)
      const tagType = view.getUint16(index + BYTE_OFFSET_TAG_TYPE, true)
      switch (tagType) {
        // UInt16
        case 3:
          valueForTagUInt(tagId, view.getUint16(index + BYTE_OFFSET_TAG_VALUE, true))
          break
        // UInt32
        case 4:
          valueForTagUInt(tagId, view.getUint32(index + BYTE_OFFSET_TAG_VALUE, true))
          break
        // Int32
        case 9:
          valueForTagUInt(tagId, view.getInt32(index + BYTE_OFFSET_TAG_VALUE, true))
          break
      }
    }
  }
}
