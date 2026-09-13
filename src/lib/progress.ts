import { CATEGORY_IDS } from '../data/categories'
import type { CategoryId, ProgressState } from '../types'

const KEY = 'panda-pal-progress-v1'

function emptyStars(): Record<CategoryId, number> {
  return CATEGORY_IDS.reduce(
    (acc, id) => {
      acc[id] = 0
      return acc
    },
    {} as Record<CategoryId, number>,
  )
}

export function emptyProgress(): ProgressState {
  return { points: 0, stars: emptyStars(), learnedIds: [], quizWins: 0 }
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProgress()
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      points: typeof parsed.points === 'number' ? parsed.points : 0,
      stars: { ...emptyStars(), ...(parsed.stars ?? {}) },
      learnedIds: Array.isArray(parsed.learnedIds) ? parsed.learnedIds : [],
      quizWins: typeof parsed.quizWins === 'number' ? parsed.quizWins : 0,
    }
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function markLearned(state: ProgressState, wordId: string): ProgressState {
  if (state.learnedIds.includes(wordId)) return state
  return { ...state, learnedIds: [...state.learnedIds, wordId] }
}

export function awardCorrect(state: ProgressState, category: CategoryId): ProgressState {
  return {
    ...state,
    points: state.points + 10,
    quizWins: state.quizWins + 1,
    stars: { ...state.stars, [category]: state.stars[category] + 1 },
  }
}

export function totalStars(state: ProgressState): number {
  return CATEGORY_IDS.reduce((sum, id) => sum + state.stars[id], 0)
}
