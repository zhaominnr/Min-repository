let voicesReady = false

function pickZhVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang.toLowerCase() === 'zh-cn') ??
    voices.find((v) => v.lang.toLowerCase().startsWith('zh'))
  )
}

export function prepareVoices(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  const markReady = () => {
    voicesReady = window.speechSynthesis.getVoices().length > 0
  }
  markReady()
  window.speechSynthesis.addEventListener('voiceschanged', markReady)
}

export function canSpeak(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function speakChinese(text: string): boolean {
  if (!canSpeak()) return false
  try {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 0.82
    utterance.pitch = 1.05
    const voice = pickZhVoice()
    if (voice) utterance.voice = voice
    window.speechSynthesis.speak(utterance)
    return true
  } catch {
    return false
  }
}

export function stopSpeaking(): void {
  if (canSpeak()) window.speechSynthesis.cancel()
}

export function hasChineseVoice(): boolean {
  return voicesReady && Boolean(pickZhVoice())
}
