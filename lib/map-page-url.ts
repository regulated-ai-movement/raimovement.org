import { type ExtendedRecordMap } from 'notion-types'
import { getBlockTitle, parsePageId, uuidToId } from 'notion-utils'

import { includeNotionIdInUrls } from './config'
import { getCanonicalPageId } from './get-canonical-page-id'
import { type Site } from './types'

// include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)
const uuid = !!includeNotionIdInUrls

// Check if a page is a draft based on its title
function isDraftPage(pageId: string, recordMap: ExtendedRecordMap): boolean {
  const pageUuid = parsePageId(pageId, { uuid: true })
  if (!pageUuid) return false

  const block = recordMap.block[pageUuid]?.value
  if (!block) return false

  const title = getBlockTitle(block, recordMap)
  return title ? title.toLowerCase().includes('[draft]') : false
}

export const mapPageUrl =
  (site: Site, recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })!

    // Return empty string for draft pages to prevent linking to them
    // This effectively disables the link while keeping the text visible
    if (isDraftPage(pageId, recordMap)) {
      return ''
    }

    if (uuidToId(pageUuid) === site.rootNotionPageId) {
      return createUrl('/', searchParams)
    } else {
      return createUrl(
        `/${getCanonicalPageId(pageUuid, recordMap, { uuid })}`,
        searchParams
      )
    }
  }

export const getCanonicalPageUrl =
  (site: Site, recordMap: ExtendedRecordMap) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })!

    if (uuidToId(pageId) === site.rootNotionPageId) {
      return `https://${site.domain}`
    } else {
      return `https://${site.domain}/${getCanonicalPageId(pageUuid, recordMap, {
        uuid
      })}`
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}
