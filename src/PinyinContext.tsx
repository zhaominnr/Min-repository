import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { loadShowPinyin, saveShowPinyin } from './lib/pinyinPref'

interface PinyinContextValue {
  showPinyin: boolean
  togglePinyin: () => void
}

const PinyinContext = createContext<PinyinContextValue>({
  showPinyin: false,
  togglePinyin: () => undefined,
})

export function PinyinProvider({ children }: { children: ReactNode }) {
  const [showPinyin, setShowPinyin] = useState(loadShowPinyin)

  useEffect(() => {
    saveShowPinyin(showPinyin)
  }, [showPinyin])

  return (
    <PinyinContext.Provider
      value={{
        showPinyin,
        togglePinyin: () => setShowPinyin((on) => !on),
      }}
    >
      {children}
    </PinyinContext.Provider>
  )
}

export function useShowPinyin(): PinyinContextValue {
  return useContext(PinyinContext)
}
