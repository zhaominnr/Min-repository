import { DEFAULT_API_BASE, DEFAULT_MODEL } from './apiSettings'

export interface ChatTurn {
  role: 'user' | 'assistant'
  content: string
}

export type ChatErrorKind = 'key' | 'network' | 'generic' | 'rate'

const SYSTEM_PROMPT = `You are a friendly Mandarin Chinese tutor for children about 5 to 12 years old, and for parents practicing with them.

Rules:
- Use short, simple sentences.
- Reply mainly in Chinese.
- After each Chinese sentence, add pinyin.
- Add a brief English line when it helps.
- Be kind. Never scold. Praise effort.
- Keep topics age-appropriate: greetings, family, school, food, animals, and daily life.
- Ask one simple question so the child can reply.
- If the user writes in English, answer in simple Chinese first, then pinyin and a short English meaning.
- Do not discuss adult, violent, or unsafe topics. Gently switch to a kid topic.`

function completionsUrl(baseUrl: string): string {
  const trimmed = baseUrl.trim().replace(/\/+$/, '') || DEFAULT_API_BASE
  if (trimmed.endsWith('/chat/completions')) return trimmed
  return `${trimmed}/chat/completions`
}

export async function sendTutorChat(options: {
  apiKey: string
  baseUrl: string
  model: string
  history: ChatTurn[]
}): Promise<{ text: string } | { error: ChatErrorKind }> {
  const url = completionsUrl(options.baseUrl)
  const body = {
    model: options.model.trim() || DEFAULT_MODEL,
    temperature: 0.6,
    max_tokens: 500,
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...options.history],
  }

  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${options.apiKey.trim()}`,
      },
      body: JSON.stringify(body),
    })
  } catch {
    return { error: 'network' }
  }

  if (response.status === 401 || response.status === 403) return { error: 'key' }
  if (response.status === 429) return { error: 'rate' }
  if (!response.ok) return { error: 'generic' }

  try {
    const data = (await response.json()) as {
      choices?: { message?: { content?: string | null } }[]
    }
    const text = data.choices?.[0]?.message?.content?.trim()
    if (!text) return { error: 'generic' }
    return { text }
  } catch {
    return { error: 'generic' }
  }
}
