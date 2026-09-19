import { useMemo, useState } from 'react'
import { DIALOGUES } from '../data/dialogues'
import { categoryName, CHEERS, t } from '../i18n'
import { pickCheerIndex, shuffle } from '../lib/random'
import type { ChoiceOption, Dialogue, DialogueTurn, ProgressState, UiLang } from '../types'
import { RewardBurst } from './RewardBurst'
import { SpeakButton } from './SpeakButton'

interface Props {
  lang: UiLang
  progress: ProgressState
  onBack: () => void
  onComplete: (dialogue: Dialogue) => void
}

function LineBlock({
  label,
  hanzi,
  pinyin,
  english,
  lang,
}: {
  label: string
  hanzi: string
  pinyin: string
  english: string
  lang: UiLang
}) {
  return (
    <div className="script-card">
      <div className="bubble-meta">{label}</div>
      <div className="hanzi script-hanzi">{hanzi}</div>
      <div className="pinyin">{pinyin}</div>
      <div className="hint">{english}</div>
      <SpeakButton text={hanzi} lang={lang} compact />
    </div>
  )
}

function PlayView({
  lang,
  dialogue,
  onBackToTopics,
  onComplete,
}: {
  lang: UiLang
  dialogue: Dialogue
  onBackToTopics: () => void
  onComplete: (dialogue: Dialogue) => void
}) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [cheer, setCheer] = useState('')
  const [burst, setBurst] = useState(false)
  const [finished, setFinished] = useState(false)
  const turn: DialogueTurn | undefined = dialogue.turns[index]
  const choiceOptions = useMemo(() => {
    if (!turn || turn.kind !== 'choice') return []
    return shuffle(turn.options)
  }, [turn])

  const finish = () => {
    setFinished(true)
    setCheer(t(lang, 'dialogueDone'))
    setBurst(true)
    onComplete(dialogue)
    window.setTimeout(() => setBurst(false), 900)
  }

  const goNext = () => {
    setPicked(null)
    setCheer('')
    if (index + 1 >= dialogue.turns.length) {
      finish()
      return
    }
    setIndex((i) => i + 1)
  }

  const onChoice = (option: ChoiceOption) => {
    if (picked) return
    setPicked(option.id)
    if (option.correct) {
      setCheer(t(lang, CHEERS[pickCheerIndex(CHEERS.length)]))
      setBurst(true)
      window.setTimeout(() => setBurst(false), 700)
    } else {
      setCheer(t(lang, 'tryAgain'))
    }
  }

  const restart = () => {
    setIndex(0)
    setPicked(null)
    setCheer('')
    setFinished(false)
    setBurst(false)
  }

  if (finished || !turn) {
    return (
      <>
        <RewardBurst show={burst} label={t(lang, 'youDidIt')} />
        <p className="lede">{t(lang, 'dialogueDone')}</p>
        <p className="status">{t(lang, 'encouraging')}</p>
        <div className="pager">
          <button className="nav-btn" type="button" onClick={onBackToTopics}>
            ← {t(lang, 'back')}
          </button>
          <button className="primary-btn" type="button" onClick={restart}>
            {t(lang, 'newRound')}
          </button>
        </div>
      </>
    )
  }

  const correctChoice = turn.kind === 'choice' && picked ? turn.options.find((o) => o.correct)?.id : null
  const choiceOk = Boolean(picked && correctChoice && picked === correctChoice)

  return (
    <>
      <RewardBurst show={burst} label={cheer || t(lang, 'great')} />
      <p className="hint">
        {t(lang, 'cardOf')} {index + 1} {t(lang, 'of')} {dialogue.turns.length}
      </p>

      {turn.kind === 'tutor' && (
        <LineBlock
          label={t(lang, 'pandaSays')}
          hanzi={turn.line.hanzi}
          pinyin={turn.line.pinyin}
          english={turn.line.english}
          lang={lang}
        />
      )}

      {turn.kind === 'learner' && (
        <LineBlock
          label={t(lang, 'youSay')}
          hanzi={turn.line.hanzi}
          pinyin={turn.line.pinyin}
          english={turn.line.english}
          lang={lang}
        />
      )}

      {turn.kind === 'choice' && (
        <>
          <p className="lede">{t(lang, 'whatNext')}</p>
          <div className="choice-grid">
            {choiceOptions.map((option) => {
              const state =
                picked && option.correct ? 'correct' : picked === option.id && !option.correct ? 'wrong' : ''
              return (
                <button
                  key={option.id}
                  className={`choice-btn ${state}`}
                  type="button"
                  onClick={() => onChoice(option)}
                  aria-label={`${option.hanzi}, ${option.pinyin}`}
                >
                  {option.hanzi}
                  <span className="mini-pinyin">{option.pinyin}</span>
                  <span className="mini-pinyin">{option.english}</span>
                </button>
              )
            })}
          </div>
        </>
      )}

      <p className="status" aria-live="polite">
        {cheer}
      </p>
      <div className="pager">
        {turn.kind === 'tutor' && (
          <button className="primary-btn" type="button" onClick={goNext}>
            {t(lang, 'next')}
          </button>
        )}
        {turn.kind === 'learner' && (
          <button className="primary-btn" type="button" onClick={goNext}>
            {t(lang, 'iSaidIt')}
          </button>
        )}
        {turn.kind === 'choice' && picked && !choiceOk && (
          <button
            className="primary-btn"
            type="button"
            onClick={() => {
              setPicked(null)
              setCheer('')
            }}
          >
            {t(lang, 'tryAgainBtn')}
          </button>
        )}
        {turn.kind === 'choice' && choiceOk && (
          <button className="primary-btn" type="button" onClick={goNext}>
            {t(lang, 'next')}
          </button>
        )}
      </div>
    </>
  )
}

export function PracticeTalkScreen({ lang, progress, onBack, onComplete }: Props) {
  const [topicId, setTopicId] = useState<string | null>(null)
  const dialogue = DIALOGUES.find((d) => d.id === topicId) ?? null

  return (
    <section className="panel">
      <div className="toolbar">
        <button
          className="nav-btn"
          type="button"
          onClick={() => {
            if (dialogue) setTopicId(null)
            else onBack()
          }}
        >
          ← {t(lang, 'back')}
        </button>
        {dialogue && (
          <span className="pill">
            {dialogue.emoji} {categoryName(lang, dialogue.category)}
          </span>
        )}
      </div>
      <h1>{t(lang, 'practiceTalk')}</h1>
      {!dialogue && <p className="lede">{t(lang, 'practiceTalkHint')}</p>}
      {!dialogue && <p className="hint">{t(lang, 'pickCategory')}</p>}

      {!dialogue && (
        <div className="category-grid">
          {DIALOGUES.map((item) => {
            const done = progress.completedDialogues.includes(item.id)
            return (
              <button
                key={item.id}
                className="cat-card"
                type="button"
                onClick={() => setTopicId(item.id)}
              >
                <span className="emoji" aria-hidden>
                  {item.emoji}
                </span>
                <strong>{categoryName(lang, item.category)}</strong>
                <div className="hint">{done ? `✓ ${t(lang, 'dialogueDoneShort')}` : t(lang, 'startTalk')}</div>
              </button>
            )
          })}
        </div>
      )}

      {dialogue && (
        <PlayView
          key={dialogue.id}
          lang={lang}
          dialogue={dialogue}
          onBackToTopics={() => setTopicId(null)}
          onComplete={onComplete}
        />
      )}
    </section>
  )
}
