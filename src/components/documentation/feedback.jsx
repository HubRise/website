import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import Link from '../../components/link'

export const Feedback = ({ relativeFilePath }) => {
  const [isExpanded, setIsExpanded] = useState(false)
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
            <li className="feedback__instructions-list-item">
              <Link className="feedback__link" to="mailto:support@hubrise.com">
                {t('misc.feedback.options.send_email')}
              </Link>
            </li>

            <li className="feedback__instructions-list-item">
              <Link
                className="feedback__link"
                to={
                  'https://github.com/HubRise/website/edit/master' +
                  relativeFilePath
                }
              >
                {t('misc.feedback.options.edit_page')}
              </Link>
            </li>
          </ul>
        </section>
      )}
    </section>
  )
}

Feedback.propTypes = {
  relativeFilePath: PropTypes.string
}
