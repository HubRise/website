import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import { useLayoutContext } from '../../context/layout'

export const ArticleFeedback = () => {
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
              flip={isExpanded ? 'vertical' : undefined}
              fixedWidth
            />
          </button>
          <p className="feedback__title">{t(`misc.feedback.blog.title`)}</p>
        </div>
      </section>
      {isExpanded && (
        <section className="feedback__section feedback__instructions">
          <p className="feedback__paragraph">
            {t(`misc.feedback.blog.part_1`)}{' '}
            <span
              onClick={forms.contact.toggle}
              className="feedback__contact-button"
            >
              {t(`misc.feedback.blog.part_2`)}
            </span>
            . {t(`misc.feedback.blog.part_3`)}
          </p>
        </section>
      )}
    </section>
  )
}
