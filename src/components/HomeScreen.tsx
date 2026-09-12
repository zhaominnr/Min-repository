import { t } from '../i18n'
import type { ScreenName, UiLang } from '../types'

interface Props {
  lang: UiLang
  onOpen: (screen: Extract<ScreenName, 'pick' | 'stars' | 'parents'>, mode?: 'flashcards' | 'choice' | 'match' | 'listen') => void
}

export function HomeScreen({ lang, onOpen }: Props) {
  return (
    <section className="hero">
      <h1>{t(lang, 'hello')}</h1>
      <p className="lede">{t(lang, 'pickPlay')}</p>
      <div className="mode-grid">
        <button className="big-card" type="button" onClick={() => onOpen('pick', 'flashcards')}>
          <span className="emoji" aria-hidden>
            🃏
          </span>
          <strong>{t(lang, 'flashcards')}</strong>
          <div className="hint">{t(lang, 'flashcardsHint')}</div>
        </button>
        <button className="big-card" type="button" onClick={() => onOpen('pick', 'choice')}>
          <span className="emoji" aria-hidden>
            🎯
          </span>
          <strong>{t(lang, 'choice')}</strong>
          <div className="hint">{t(lang, 'choiceHint')}</div>
        </button>
        <button className="big-card" type="button" onClick={() => onOpen('pick', 'match')}>
          <span className="emoji" aria-hidden>
            🧩
          </span>
          <strong>{t(lang, 'match')}</strong>
          <div className="hint">{t(lang, 'matchHint')}</div>
        </button>
        <button className="big-card" type="button" onClick={() => onOpen('pick', 'listen')}>
          <span className="emoji" aria-hidden>
            👂
          </span>
          <strong>{t(lang, 'listen')}</strong>
          <div className="hint">{t(lang, 'listenHint')}</div>
        </button>
        <button className="big-card" type="button" onClick={() => onOpen('stars')}>
          <span className="emoji" aria-hidden>
            ⭐
          </span>
          <strong>{t(lang, 'stars')}</strong>
          <div className="hint">{t(lang, 'starsHint')}</div>
        </button>
        <button className="big-card" type="button" onClick={() => onOpen('parents')}>
          <span className="emoji" aria-hidden>
            👪
          </span>
          <strong>{t(lang, 'parents')}</strong>
        </button>
      </div>
    </section>
  )
}
