import { useEffect, useMemo, useState } from 'react'
import { wordsFor } from '../data/vocabulary'
import { CHEERS, t } from '../i18n'
import { canSpeak, speakChinese } from '../lib/speech'
import { pickCheerIndex, pickN, shuffle } from '../lib/random'
import type { QuizCategory, UiLang, Word } from '../types'
import { RewardBurst } from './RewardBurst'
import { SpeakButton } from './SpeakButton'

interface Props {
  lang: UiLang
  category: QuizCategory
  onBack: () => void
  onCorrect: (word: Word) => void
}

function nextQuestion(category: QuizCategory) {
  const pool = wordsFor(category)
  const answer = pickN(pool, 1)[0]
  const distractors = pickN(
    pool.filter((w) => w.id !== answer.id),
    3,
  )
  return { answer, choices: shuffle([answer, ...distractors]) }
}

export function ListenQuiz({ lang, category, onBack, onCorrect }: Props) {
  const first = useMemo(() => nextQuestion(category), [category])
  const [round, setRound] = useState(first)
  const [picked, setPicked] = useState<string | null>(null)
  const [cheer, setCheer] = useState('')
  const [burst, setBurst] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => speakChinese(round.answer.hanzi), 250)
    return () => window.clearTimeout(timer)
  }, [round.answer.id, round.answer.hanzi])

  const choose = (word: Word) => {
    if (picked) return
    setPicked(word.id)
    if (word.id === round.answer.id) {
      setCheer(t(lang, CHEERS[pickCheerIndex(CHEERS.length)]))
      setBurst(true)
      onCorrect(round.answer)
      window.setTimeout(() => setBurst(false), 800)
    } else {
      setCheer(t(lang, 'tryAgain'))
    }
  }

  const next = () => {
    setRound(nextQuestion(category))
    setPicked(null)
    setCheer('')
  }

  const retry = () => {
    setPicked(null)
    setCheer('')
    speakChinese(round.answer.hanzi)
  }

  const correct = picked === round.answer.id

  return (
    <section className="panel">
      <RewardBurst show={burst} label={cheer || t(lang, 'great')} />
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
      </div>
      <div className="prompt-card">
        <span className="emoji-xl" aria-hidden>
          🐼
        </span>
        <h1>{t(lang, 'listenQuestion')}</h1>
        <p className="lede">{canSpeak() ? t(lang, 'playAgain') : t(lang, 'speakUnavailable')}</p>
        <SpeakButton text={round.answer.hanzi} lang={lang} labelKey="playAgain" />
      </div>
      <div className="choice-grid">
        {round.choices.map((word) => {
          const state =
            picked && word.id === round.answer.id
              ? 'correct'
              : picked === word.id && word.id !== round.answer.id
                ? 'wrong'
                : ''
          return (
            <button
              key={word.id}
              className={`choice-btn ${state}`}
              type="button"
              onClick={() => choose(word)}
            >
              <span aria-hidden>{word.emoji} </span>
              {word.english}
            </button>
          )
        })}
      </div>
      <p className="status" aria-live="polite">
        {cheer}
      </p>
      <div className="pager">
        {picked && !correct && (
          <button className="primary-btn" type="button" onClick={retry}>
            {t(lang, 'tryAgainBtn')}
          </button>
        )}
        {correct && (
          <button className="primary-btn" type="button" onClick={next}>
            {t(lang, 'nextQuestion')}
          </button>
        )}
      </div>
    </section>
  )
}
