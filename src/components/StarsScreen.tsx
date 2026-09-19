import { useState } from 'react'
import { CATEGORIES } from '../data/categories'
import { DIALOGUES } from '../data/dialogues'
import { WORDS } from '../data/vocabulary'
import { categoryName, t } from '../i18n'
import { totalStars } from '../lib/progress'
import type { ProgressState, UiLang } from '../types'

interface Props {
  lang: UiLang
  progress: ProgressState
  onBack: () => void
  onReset: () => void
}

export function StarsScreen({ lang, progress, onBack, onReset }: Props) {
  const [confirm, setConfirm] = useState(false)
  const stars = totalStars(progress)

  return (
    <section className="panel">
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
      </div>
      <h1>{t(lang, 'stars')}</h1>
      <p className="lede">{t(lang, 'encouraging')}</p>
      <div className="stat-pills">
        <span className="pill">⭐ {t(lang, 'totalStars')}: {stars}</span>
        <span className="pill">📚 {t(lang, 'wordsLearned')}: {progress.learnedIds.length}/{WORDS.length}</span>
        <span className="pill">🐼 {t(lang, 'points')}: {progress.points}</span>
        <span className="pill">🎉 {t(lang, 'quizWins')}: {progress.quizWins}</span>
        <span className="pill">💬 {t(lang, 'talksDone')}: {progress.completedDialogues.length}/{DIALOGUES.length}</span>
      </div>
      <div className="stars-list">
        {CATEGORIES.map((cat) => (
          <div className="star-row" key={cat.id}>
            <strong>
              {cat.emoji} {categoryName(lang, cat.id)}
            </strong>
            <span aria-label={`${progress.stars[cat.id]} ${t(lang, 'totalStars')}`}>
              {'⭐'.repeat(Math.min(progress.stars[cat.id], 8))}
              {progress.stars[cat.id] > 8 ? ` +${progress.stars[cat.id] - 8}` : ''}
              {progress.stars[cat.id] === 0 ? '·' : ` ${progress.stars[cat.id]}`}
            </span>
          </div>
        ))}
      </div>
      <p className="lede" style={{ marginTop: 18 }}>
        {t(lang, 'noHarsh')}
      </p>
      <div className="reset-row">
        {!confirm ? (
          <button className="ghost-btn" type="button" onClick={() => setConfirm(true)}>
            {t(lang, 'resetProgress')}
          </button>
        ) : (
          <>
            <span>{t(lang, 'resetConfirm')}</span>
            <button className="ghost-btn" type="button" onClick={() => setConfirm(false)}>
              {t(lang, 'cancel')}
            </button>
            <button
              className="primary-btn"
              type="button"
              onClick={() => {
                onReset()
                setConfirm(false)
              }}
            >
              {t(lang, 'yesReset')}
            </button>
          </>
        )}
      </div>
    </section>
  )
}
