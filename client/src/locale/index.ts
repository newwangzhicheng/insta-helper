import { I18n } from 'i18n-js'
import { getLocales } from 'expo-localization'
import en from './en'
import zh from './zh'

const systemLanguage = getLocales()[0].languageCode

const i18n = new I18n({ zh, en })
i18n.locale = 'zh'
i18n.enableFallback = true

if (systemLanguage !== 'zh') {
  i18n.locale = 'en'
}

export default i18n
