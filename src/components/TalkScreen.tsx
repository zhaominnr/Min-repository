import { useEffect, useRef, useState, type FormEvent } from 'react'
import { TALK_PROMPTS, t, type CopyKey } from '../i18n'
import {
  clearApiSettings,
  DEFAULT_API_BASE,
  DEFAULT_MODEL,
  hasApiKey,
  loadApiSettings,
  saveApiSettings,
  type ApiSettings,
} from '../lib/apiSettings'
import { sendTutorChat, type ChatErrorKind, type ChatTurn } from '../lib/chat'
import { chineseForSpeech } from '../lib/speech'
import type { UiLang } from '../types'
import { SpeakButton } from './SpeakButton'

interface Props {
  lang: UiLang
  onBack: () => void
}

function errorCopy(kind: ChatErrorKind): CopyKey {
  if (kind === 'key') return 'errorKey'
  if (kind === 'network') return 'errorNetwork'
  if (kind === 'rate') return 'errorRate'
  return 'errorGeneric'
}

export function TalkScreen({ lang, onBack }: Props) {
  const [settings, setSettings] = useState<ApiSettings>(loadApiSettings)
  const [draft, setDraft] = useState<ApiSettings>(loadApiSettings)
  const [showSettings, setShowSettings] = useState(() => !hasApiKey(loadApiSettings()))
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatTurn[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const logRef = useRef<HTMLDivElement>(null)
  const ready = hasApiKey(settings)

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  const persist = (next: ApiSettings) => {
    saveApiSettings(next)
    const loaded = loadApiSettings()
    setSettings(loaded)
    setDraft(loaded)
    setShowSettings(!hasApiKey(loaded))
    setError('')
  }

  const onSaveSettings = (event: FormEvent) => {
    event.preventDefault()
    persist(draft)
  }

  const onClearKey = () => {
    clearApiSettings()
    const empty = loadApiSettings()
    setSettings(empty)
    setDraft(empty)
    setShowSettings(true)
    setMessages([])
    setError('')
  }

  const send = async (text: string) => {
    const content = text.trim()
    if (!content || busy || !ready) return
    const history: ChatTurn[] = [...messages, { role: 'user', content }]
    setMessages(history)
    setInput('')
    setBusy(true)
    setError('')
    const result = await sendTutorChat({
      apiKey: settings.apiKey,
      baseUrl: settings.baseUrl,
      model: settings.model,
      history,
    })
    setBusy(false)
    if ('error' in result) {
      setError(t(lang, errorCopy(result.error)))
      return
    }
    setMessages([...history, { role: 'assistant', content: result.text }])
  }

  return (
    <section className="panel talk-panel">
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
        <button
          className="ghost-btn"
          type="button"
          onClick={() => setShowSettings((open) => !open)}
        >
          {showSettings ? t(lang, 'talkHideSettings') : t(lang, 'talkSettings')}
        </button>
      </div>
      <h1>{t(lang, 'talk')}</h1>
      <p className="lede">{t(lang, 'talkHint')}</p>

      {showSettings && (
        <form className="settings-card" onSubmit={onSaveSettings}>
          <p className="hint">{t(lang, 'keyHint')}</p>
          <label className="field">
            <span>{t(lang, 'apiKey')}</span>
            <input
              type="password"
              name="api-key"
              autoComplete="off"
              value={draft.apiKey}
              onChange={(event) => setDraft({ ...draft, apiKey: event.target.value })}
            />
          </label>
          <label className="field">
            <span>{t(lang, 'apiBase')}</span>
            <input
              type="text"
              name="api-base"
              autoComplete="off"
              placeholder={DEFAULT_API_BASE}
              value={draft.baseUrl}
              onChange={(event) => setDraft({ ...draft, baseUrl: event.target.value })}
            />
          </label>
          <label className="field">
            <span>{t(lang, 'apiModel')}</span>
            <input
              type="text"
              name="api-model"
              autoComplete="off"
              placeholder={DEFAULT_MODEL}
              value={draft.model}
              onChange={(event) => setDraft({ ...draft, model: event.target.value })}
            />
          </label>
          <div className="reset-row">
            <button className="primary-btn" type="submit">
              {t(lang, 'saveKey')}
            </button>
            {ready && (
              <button className="ghost-btn" type="button" onClick={onClearKey}>
                {t(lang, 'clearKey')}
              </button>
            )}
          </div>
        </form>
      )}

      {ready && !showSettings && <p className="hint">{t(lang, 'keySaved')}</p>}

      {!ready && <p className="empty-note">{t(lang, 'talkEmpty')}</p>}

      {ready && (
        <>
          <div className="chips" role="group" aria-label={t(lang, 'talkHint')}>
            {TALK_PROMPTS.map((key) => (
              <button
                key={key}
                className="chip"
                type="button"
                disabled={busy}
                onClick={() => void send(t(lang, key))}
              >
                {t(lang, key)}
              </button>
            ))}
          </div>
          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((turn, index) => (
              <div key={`${turn.role}-${index}`} className={`bubble ${turn.role}`}>
                <div className="bubble-meta">{t(lang, turn.role === 'user' ? 'you' : 'tutor')}</div>
                <div className="bubble-text">{turn.content}</div>
                {turn.role === 'assistant' && (
                  <SpeakButton text={chineseForSpeech(turn.content)} lang={lang} compact />
                )}
              </div>
            ))}
            {busy && <p className="status">{t(lang, 'sending')}</p>}
          </div>
          {error && (
            <p className="status" role="alert">
              {error}
            </p>
          )}
          <form
            className="chat-composer"
            onSubmit={(event) => {
              event.preventDefault()
              void send(input)
            }}
          >
            <label className="sr-only" htmlFor="talk-input">
              {t(lang, 'yourMessage')}
            </label>
            <input
              id="talk-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t(lang, 'yourMessage')}
              disabled={busy}
              autoComplete="off"
            />
            <button className="primary-btn" type="submit" disabled={busy || !input.trim()}>
              {t(lang, 'send')}
            </button>
          </form>
        </>
      )}
    </section>
  )
}
