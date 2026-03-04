import client from './client'
import { urlFor } from './image'

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  _id,
  primaryLogo,
  lightLogo,
  favicon,
  defaultOgImage
}`

export async function fetchSiteSettings() {
  return client.fetch(siteSettingsQuery)
}

export function siteImageUrl(imageField) {
  if (!imageField) return ''
  try {
    return urlFor(imageField).auto('format').url()
  } catch {
    return ''
  }
}
