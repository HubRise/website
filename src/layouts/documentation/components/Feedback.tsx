import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Link from '@components/Link'

export interface FeedbackProps {
  /** The path of the source file, relative to "content", with no leading slash
   * (eg "contributing/en/style-guide.md") */
  relativePath: string
}

const Feedback = ({ relativePath }: FeedbackProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { t } = useTranslation()

  const gitHubPath = `https://github.com/HubRise/website/edit/master/content/${relativePath}`
  const supportEmail = 'mailto:support@hubrise.com'

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
              flip={isExpanded ? `vertical` : undefined}
              fixedWidth
            />
          </button>
          <p className="feedback__title">
            {t(`misc.feedback.documentation.title`)}
          </p>
        </div>
      </section>

      {isExpanded && (
        <section className="feedback__section feedback__instructions">
          <p className="feedback__paragraph">
            {t(`misc.feedback.documentation.description`)}
          </p>
          <ul>
            <li key={supportEmail} className="feedback__instructions-list-item">
              <Link className="feedback__link" to={supportEmail}>
                {t('misc.feedback.documentation.options.send_email')}
              </Link>
            </li>
            <li key={gitHubPath} className="feedback__instructions-list-item">
              <Link className="feedback__link" to={gitHubPath}>
                {t('misc.feedback.documentation.options.edit_page')}
              </Link>
            </li>
          </ul>
        </section>
      )}
    </section>
  )
}

export default Feedback
