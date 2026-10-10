const KEY = 'panda-pal-show-pinyin-v1'

export function loadShowPinyin(): boolean {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export function saveShowPinyin(show: boolean): void {
  localStorage.setItem(KEY, show ? '1' : '0')
}
