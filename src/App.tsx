import { useEffect, useState } from 'react'
import { CategoryPicker } from './components/CategoryPicker'
import { ChoiceQuiz } from './components/ChoiceQuiz'
import { Flashcards } from './components/Flashcards'
import { HomeScreen } from './components/HomeScreen'
import { ListenQuiz } from './components/ListenQuiz'
import { MatchQuiz } from './components/MatchQuiz'
import { ParentsScreen } from './components/ParentsScreen'
import { StarsScreen } from './components/StarsScreen'
import { t } from './i18n'
import { awardCorrect, emptyProgress, loadProgress, markLearned, saveProgress } from './lib/progress'
import { prepareVoices, stopSpeaking } from './lib/speech'
import type { CategoryId, PracticeMode, ProgressState, QuizCategory, ScreenName, UiLang, Word } from './types'

const LANG_KEY = 'panda-pal-lang'

type Mode = 'flashcards' | PracticeMode

interface ScreenState {
  name: ScreenName
  mode?: Mode
  category?: QuizCategory
}

function loadLang(): UiLang {
  return localStorage.getItem(LANG_KEY) === 'zh' ? 'zh' : 'en'
}

export default function App() {
  const [lang, setLang] = useState<UiLang>(loadLang)
  const [progress, setProgress] = useState<ProgressState>(loadProgress)
  const [screen, setScreen] = useState<ScreenState>({ name: 'home' })

  useEffect(() => {
    prepareVoices()
  }, [])

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const goHome = () => {
    stopSpeaking()
    setScreen({ name: 'home' })
  }

  const openFromHome = (
    name: Extract<ScreenName, 'pick' | 'stars' | 'parents'>,
    mode?: Mode,
  ) => {
    setScreen({ name, mode })
  }

  const openPlay = (name: ScreenName, category: QuizCategory) => {
    setScreen({ name, category, mode: name === 'flashcards' ? 'flashcards' : (name as Mode) })
  }

  const onLearn = (wordId: string) => {
    setProgress((p) => markLearned(p, wordId))
  }

  const onCorrect = (word: Word) => {
    setProgress((p) => awardCorrect(markLearned(p, word.id), word.category))
  }

  const category = screen.category

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" type="button" onClick={goHome} aria-label={t(lang, 'home')}>
          <span className="brand-mark" aria-hidden>
            🐼
          </span>
          <span className="brand-text">
            <strong>{t(lang, 'appName')}</strong>
            <span>{t(lang, 'tagline')}</span>
          </span>
        </button>
        <div className="lang-toggle" role="group" aria-label={t(lang, 'language')}>
          <button
            type="button"
            className={lang === 'en' ? 'active' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            {t(lang, 'langToggleEn')}
          </button>
          <button
            type="button"
            className={lang === 'zh' ? 'active' : ''}
            aria-pressed={lang === 'zh'}
            onClick={() => setLang('zh')}
          >
            {t(lang, 'langToggleZh')}
          </button>
        </div>
      </header>

      {screen.name === 'home' && <HomeScreen lang={lang} onOpen={openFromHome} />}

      {screen.name === 'pick' && screen.mode && (
        <CategoryPicker lang={lang} mode={screen.mode} onBack={goHome} onPick={openPlay} />
      )}

      {screen.name === 'flashcards' && category && category !== 'all' && (
        <Flashcards
          lang={lang}
          category={category as CategoryId}
          progress={progress}
          onBack={() => setScreen({ name: 'pick', mode: 'flashcards' })}
          onLearn={onLearn}
        />
      )}

      {screen.name === 'choice' && category && (
        <ChoiceQuiz
          lang={lang}
          category={category}
          onBack={() => setScreen({ name: 'pick', mode: 'choice' })}
          onCorrect={onCorrect}
        />
      )}

      {screen.name === 'match' && category && (
        <MatchQuiz
          lang={lang}
          category={category}
          onBack={() => setScreen({ name: 'pick', mode: 'match' })}
          onCorrect={onCorrect}
        />
      )}

      {screen.name === 'listen' && category && (
        <ListenQuiz
          lang={lang}
          category={category}
          onBack={() => setScreen({ name: 'pick', mode: 'listen' })}
          onCorrect={onCorrect}
        />
      )}

      {screen.name === 'stars' && (
        <StarsScreen
          lang={lang}
          progress={progress}
          onBack={goHome}
          onReset={() => setProgress(emptyProgress())}
        />
      )}

      {screen.name === 'parents' && <ParentsScreen lang={lang} onBack={goHome} />}
    </div>
  )
}
