import { useMemo, useState } from 'react'
import { getCategory } from '../data/categories'
import { wordsFor } from '../data/vocabulary'
import { categoryName, t } from '../i18n'
import type { CategoryId, ProgressState, UiLang } from '../types'
import { SpeakButton } from './SpeakButton'

interface Props {
  lang: UiLang
  category: CategoryId
  progress: ProgressState
  onBack: () => void
  onLearn: (wordId: string) => void
}

export function Flashcards({ lang, category, progress, onBack, onLearn }: Props) {
  const words = useMemo(() => wordsFor(category), [category])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const word = words[index]
  const cat = getCategory(category)

  const flip = () => {
    const next = !flipped
    setFlipped(next)
    if (next) onLearn(word.id)
  }

  const go = (delta: number) => {
    setFlipped(false)
    setIndex((i) => (i + delta + words.length) % words.length)
  }

  return (
    <section className="panel">
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
        <span className="pill">
          {cat.emoji} {categoryName(lang, category)}
        </span>
        <span className="pill">
          {t(lang, 'cardOf')} {index + 1} {t(lang, 'of')} {words.length}
        </span>
      </div>
      <div className="flash-wrap">
        <p className="lede">{t(lang, 'flip')}</p>
        <div className="card-stage">
          <button
            className={`flash-card ${flipped ? 'is-flipped' : ''}`}
            type="button"
            onClick={flip}
            aria-label={flipped ? `${word.english}. ${t(lang, 'flip')}` : `${word.hanzi}. ${t(lang, 'tapToReveal')}`}
          >
            <div className="face front">
              <span className="emoji-xl" aria-hidden>
                {word.emoji}
              </span>
              <div className="hanzi">{word.hanzi}</div>
              <div className="pinyin">{word.pinyin}</div>
              <div className="hint">{t(lang, 'tapToReveal')}</div>
            </div>
            <div className="face back">
              <span className="emoji-xl" aria-hidden>
                {word.emoji}
              </span>
              <div className="hanzi">{word.hanzi}</div>
              <div className="pinyin">{word.pinyin}</div>
              <div className="hint">{t(lang, 'meaning')}</div>
              <div className="meaning">{word.english}</div>
            </div>
          </button>
        </div>
        <SpeakButton text={word.hanzi} lang={lang} />
        <div className="pager">
          <button className="nav-btn" type="button" onClick={() => go(-1)}>
            ← {t(lang, 'prev')}
          </button>
          <button className="primary-btn" type="button" onClick={() => go(1)}>
            {t(lang, 'next')} →
          </button>
        </div>
        {progress.learnedIds.includes(word.id) && (
          <p className="status" aria-live="polite">
            ⭐ {t(lang, 'encouraging')}
          </p>
        )}
      </div>
    </section>
  )
}
