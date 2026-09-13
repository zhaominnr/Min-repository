import { t, type CopyKey } from '../i18n'
import { canSpeak, speakChinese } from '../lib/speech'
import type { UiLang } from '../types'

interface Props {
  text: string
  lang: UiLang
  labelKey?: CopyKey
}

export function SpeakButton({ text, lang, labelKey = 'speak' }: Props) {
  const available = canSpeak()

  if (!available) {
    return <p className="speak-fallback">{t(lang, 'speakUnavailable')}</p>
  }

  return (
    <button
      className="speak-btn"
      type="button"
      onClick={() => speakChinese(text)}
      aria-label={t(lang, labelKey)}
    >
      🔊
    </button>
  )
}
