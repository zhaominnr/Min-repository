import { t, type CopyKey } from '../i18n'
import { canSpeak, speakChinese } from '../lib/speech'
import type { UiLang } from '../types'

interface Props {
  text: string
  lang: UiLang
  labelKey?: CopyKey
  compact?: boolean
}

export function SpeakButton({ text, lang, labelKey = 'speak', compact = false }: Props) {
  const available = canSpeak()

  if (!available) {
    if (compact) return null
    return <p className="speak-fallback">{t(lang, 'speakUnavailable')}</p>
  }

  return (
    <button
      className={compact ? 'speak-btn speak-btn-sm' : 'speak-btn'}
      type="button"
      onClick={() => speakChinese(text)}
      aria-label={t(lang, labelKey)}
    >
      🔊
    </button>
  )
}
