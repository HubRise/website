import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import { useLayoutContext } from '../../context/layout'
import Link from '../../components/link'
import { generateKey } from '../../components/utils'

export const Feedback = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { forms } = useLayoutContext()
  const { t } = useTranslation()

  return (
    <section className="feedback">
      <section className="feedback__section">
        <div
          className={`
            feedback__title-wrapper
            ${isExpanded ? 'feedback__title-wrapper_highlighted' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <button className="feedback__title-icon">
            <FontAwesomeIcon
              icon={faAngleDown}
              flip={isExpanded && `vertical`}
              fixedWidth
            />
          </button>
          <p className="feedback__title">{t(`misc.feedback.title`)}</p>
        </div>
      </section>
      {isExpanded && (
        <section className="feedback__section feedback__instructions">
          <p className="feedback__paragraph">
            {t(`misc.feedback.description`)}
          </p>
          <ul>
            {t(`misc.feedback.options`).map(({ text, to }, idx) => (
              <li
                key={generateKey(text, idx)}
                className="feedback__instructions-list-item"
              >
                {to ? (
                  <Link className="feedback__link" to={to}>
                    {text}
                  </Link>
                ) : (
                  <button
                    className="feedback__contact-button"
                    onClick={forms.contact.toggle}
                  >
                    {text}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}
