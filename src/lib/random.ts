export function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

export function pickN<T>(items: readonly T[], n: number): T[] {
  return shuffle(items).slice(0, n)
}

export function pickCheerIndex(length: number): number {
  return Math.floor(Math.random() * length)
}
