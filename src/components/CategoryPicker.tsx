import { CATEGORIES } from '../data/categories'
import { wordCountFor } from '../data/vocabulary'
import { categoryName, t } from '../i18n'
import type { PracticeMode, QuizCategory, ScreenName, UiLang } from '../types'

interface Props {
  lang: UiLang
  mode: 'flashcards' | PracticeMode
  onBack: () => void
  onPick: (screen: ScreenName, category: QuizCategory) => void
}

export function CategoryPicker({ lang, mode, onBack, onPick }: Props) {
  const titles: Record<typeof mode, 'flashcards' | 'choice' | 'match' | 'listen'> = {
    flashcards: 'flashcards',
    choice: 'choice',
    match: 'match',
    listen: 'listen',
  }

  return (
    <section className="panel">
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
      </div>
      <h1>{t(lang, titles[mode])}</h1>
      <p className="lede">{t(lang, 'pickCategory')}</p>
      <div className="category-grid">
        {mode !== 'flashcards' && (
          <button className="cat-card" type="button" onClick={() => onPick(mode, 'all')}>
            <span className="emoji" aria-hidden>
              🌈
            </span>
            <strong>{t(lang, 'mixAll')}</strong>
            <div className="hint">{t(lang, 'mixAllHint')}</div>
          </button>
        )}
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="cat-card"
            type="button"
            style={{ background: `${cat.color}18` }}
            onClick={() => onPick(mode === 'flashcards' ? 'flashcards' : mode, cat.id)}
          >
            <span className="emoji" aria-hidden>
              {cat.emoji}
            </span>
            <strong>{categoryName(lang, cat.id)}</strong>
            <div className="hint">
              {wordCountFor(cat.id)} {t(lang, 'wordCount')}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
