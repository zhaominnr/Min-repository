import { useMemo, useState } from 'react'
import { wordsFor } from '../data/vocabulary'
import { t } from '../i18n'
import { speakChinese } from '../lib/speech'
import { pickN, shuffle } from '../lib/random'
import type { QuizCategory, UiLang, Word } from '../types'
import { RewardBurst } from './RewardBurst'

interface Props {
  lang: UiLang
  category: QuizCategory
  onBack: () => void
  onCorrect: (word: Word) => void
}

function deal(category: QuizCategory) {
  const words = pickN(wordsFor(category), 4)
  return {
    words,
    left: shuffle(words),
    right: shuffle(words),
  }
}

export function MatchQuiz({ lang, category, onBack, onCorrect }: Props) {
  const first = useMemo(() => deal(category), [category])
  const [board, setBoard] = useState(first)
  const [leftId, setLeftId] = useState<string | null>(null)
  const [rightId, setRightId] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [message, setMessage] = useState(t(lang, 'matchHintPlay'))
  const [burst, setBurst] = useState(false)
  const [wrong, setWrong] = useState(false)

  const finishIfNeeded = (nextDone: string[]) => {
    if (nextDone.length === board.words.length) {
      setMessage(t(lang, 'youDidIt'))
      setBurst(true)
      window.setTimeout(() => setBurst(false), 900)
    }
  }

  const tryMatch = (nextLeft: string | null, nextRight: string | null) => {
    if (!nextLeft || !nextRight) return
    if (nextLeft === nextRight) {
      const word = board.words.find((w) => w.id === nextLeft)
      const nextDone = [...done, nextLeft]
      setDone(nextDone)
      setMessage(t(lang, 'matched'))
      setLeftId(null)
      setRightId(null)
      if (word) onCorrect(word)
      finishIfNeeded(nextDone)
    } else {
      setWrong(true)
      setMessage(t(lang, 'tryAgain'))
      window.setTimeout(() => {
        setLeftId(null)
        setRightId(null)
        setWrong(false)
      }, 450)
    }
  }

  const pickLeft = (word: Word) => {
    if (done.includes(word.id)) return
    speakChinese(word.hanzi)
    setLeftId(word.id)
    tryMatch(word.id, rightId)
  }

  const pickRight = (word: Word) => {
    if (done.includes(word.id)) return
    setRightId(word.id)
    tryMatch(leftId, word.id)
  }

  const reset = () => {
    setBoard(deal(category))
    setLeftId(null)
    setRightId(null)
    setDone([])
    setMessage(t(lang, 'matchHintPlay'))
  }

  const complete = done.length === board.words.length

  return (
    <section className="panel">
      <RewardBurst show={burst} label={t(lang, 'youDidIt')} />
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
      </div>
      <h1>{t(lang, 'match')}</h1>
      <p className="lede">{message}</p>
      <div className="match-board">
        <div className="match-col" aria-label={t(lang, 'chineseColumn')}>
          {board.left.map((word) => (
            <button
              key={`l-${word.id}`}
              className={`match-tile ${done.includes(word.id) ? 'done' : ''} ${leftId === word.id ? 'selected' : ''} ${wrong && leftId === word.id ? 'wrong' : ''}`}
              type="button"
              onClick={() => pickLeft(word)}
              disabled={done.includes(word.id)}
              aria-label={`${word.hanzi} ${word.pinyin}`}
            >
              {word.hanzi}
              <span className="mini-pinyin">{word.pinyin}</span>
            </button>
          ))}
        </div>
        <div className="match-col" aria-label={t(lang, 'englishColumn')}>
          {board.right.map((word) => (
            <button
              key={`r-${word.id}`}
              className={`match-tile ${done.includes(word.id) ? 'done' : ''} ${rightId === word.id ? 'selected' : ''} ${wrong && rightId === word.id ? 'wrong' : ''}`}
              type="button"
              onClick={() => pickRight(word)}
              disabled={done.includes(word.id)}
            >
              {word.emoji} {word.english}
            </button>
          ))}
        </div>
      </div>
      {complete && (
        <div className="pager">
          <button className="primary-btn" type="button" onClick={reset}>
            {t(lang, 'newRound')}
          </button>
        </div>
      )}
    </section>
  )
}
