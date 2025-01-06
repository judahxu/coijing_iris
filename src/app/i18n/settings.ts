// app/i18n/settings.ts
export const fallbackLng = 'zh'
export const languages = ['zh', 'en']
export const defaultNS = 'common'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}