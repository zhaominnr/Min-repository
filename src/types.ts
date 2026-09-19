export type CategoryId =
  | 'greetings'
  | 'numbers'
  | 'colors'
  | 'animals'
  | 'family'
  | 'food'
  | 'body'
  | 'school'

export type QuizCategory = CategoryId | 'all'

export type PracticeMode = 'choice' | 'match' | 'listen'

export type ScreenName =
  | 'home'
  | 'pick'
  | 'flashcards'
  | 'choice'
  | 'match'
  | 'listen'
  | 'practiceTalk'
  | 'talk'
  | 'stars'
  | 'parents'

export interface ScriptLine {
  hanzi: string
  pinyin: string
  english: string
}

export interface ChoiceOption extends ScriptLine {
  id: string
  correct: boolean
}

export type DialogueTurn =
  | { id: string; kind: 'tutor'; line: ScriptLine }
  | { id: string; kind: 'learner'; line: ScriptLine }
  | { id: string; kind: 'choice'; options: ChoiceOption[] }

export type DialogueId = 'greetings' | 'family' | 'food' | 'school' | 'animals' | 'colors'

export interface Dialogue {
  id: DialogueId
  category: CategoryId
  emoji: string
  turns: DialogueTurn[]
}

export interface Word {
  id: string
  category: CategoryId
  hanzi: string
  pinyin: string
  english: string
  emoji: string
}

export interface CategoryInfo {
  id: CategoryId
  emoji: string
  color: string
}

export interface ProgressState {
  points: number
  stars: Record<CategoryId, number>
  learnedIds: string[]
  quizWins: number
  completedDialogues: string[]
}

export type UiLang = 'en' | 'zh'
