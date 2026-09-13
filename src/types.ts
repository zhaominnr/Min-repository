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
  | 'stars'
  | 'parents'

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
}

export type UiLang = 'en' | 'zh'
