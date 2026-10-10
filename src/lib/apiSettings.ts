export const DEFAULT_API_BASE = 'https://api.openai.com/v1'
export const DEFAULT_MODEL = 'gpt-4o-mini'

const KEY = 'panda-pal-api-v1'

export interface ApiSettings {
  apiKey: string
  baseUrl: string
  model: string
}

export function emptyApiSettings(): ApiSettings {
  return { apiKey: '', baseUrl: DEFAULT_API_BASE, model: DEFAULT_MODEL }
}

export function loadApiSettings(): ApiSettings {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyApiSettings()
    const parsed = JSON.parse(raw) as Partial<ApiSettings>
    return {
      apiKey: typeof parsed.apiKey === 'string' ? parsed.apiKey : '',
      baseUrl: typeof parsed.baseUrl === 'string' && parsed.baseUrl.trim() ? parsed.baseUrl.trim() : DEFAULT_API_BASE,
      model: typeof parsed.model === 'string' && parsed.model.trim() ? parsed.model.trim() : DEFAULT_MODEL,
    }
  } catch {
    return emptyApiSettings()
  }
}

export function saveApiSettings(settings: ApiSettings): void {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      apiKey: settings.apiKey.trim(),
      baseUrl: settings.baseUrl.trim() || DEFAULT_API_BASE,
      model: settings.model.trim() || DEFAULT_MODEL,
    }),
  )
}

export function clearApiSettings(): void {
  localStorage.removeItem(KEY)
}

export function hasApiKey(settings: ApiSettings): boolean {
  return settings.apiKey.trim().length > 0
}
