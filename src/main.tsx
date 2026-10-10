import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { PinyinProvider } from './PinyinContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PinyinProvider>
      <App />
    </PinyinProvider>
  </StrictMode>,
)
