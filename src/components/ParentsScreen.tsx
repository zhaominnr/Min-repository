import { t } from '../i18n'
import type { UiLang } from '../types'

interface Props {
  lang: UiLang
  onBack: () => void
}

export function ParentsScreen({ lang, onBack }: Props) {
  return (
    <section className="panel parents">
      <div className="toolbar">
        <button className="nav-btn" type="button" onClick={onBack}>
          ← {t(lang, 'back')}
        </button>
      </div>
      <h1>{t(lang, 'parentsTitle')}</h1>
      <p>{t(lang, 'parentsBody1')}</p>
      <p>{t(lang, 'parentsBody2')}</p>
      <p>{t(lang, 'parentsBody3')}</p>
      <p>{t(lang, 'parentsBody4')}</p>
    </section>
  )
}
