import type { CategoryId, CategoryInfo } from '../types'

export const CATEGORIES: CategoryInfo[] = [
  { id: 'greetings', emoji: '👋', color: '#ff8a4c' },
  { id: 'numbers', emoji: '🔢', color: '#4c8dff' },
  { id: 'colors', emoji: '🎨', color: '#c44cff' },
  { id: 'animals', emoji: '🐼', color: '#2db36e' },
  { id: 'family', emoji: '👨‍👩‍👧', color: '#ff5d8f' },
  { id: 'food', emoji: '🥟', color: '#ffb020' },
  { id: 'body', emoji: '🧒', color: '#20c4c4' },
  { id: 'school', emoji: '🎒', color: '#6b7cff' },
]

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id)

export function getCategory(id: CategoryId): CategoryInfo {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]
}
