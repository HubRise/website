import * as React from 'react'
import cx from 'classnames'
import { useMedia } from 'react-use'
import { GatsbyImage } from 'gatsby-plugin-image'

import Link from '@components/Link'
import { createHeaderAnchor, generateKey } from '@utils/misc'
import { ImageSharp } from '@utils/image'
import { FolderPage } from '../interface'

interface SectionNavigationProps {
  currentPath: string
  folderPages: Array<FolderPage>
  title: string
  logo?: ImageSharp
  headings: Array<Heading>
}

export interface Heading {
  depth: number
  value: string
}

const SectionNavigation = ({
  currentPath,
  folderPages,
  title,
  logo,
  headings
}: SectionNavigationProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isFixed, setFixed] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDesktop = useMedia('(min-width: 1024px)')
  const [currentTitle, setCurrentTitle] = React.useState(title)

  const chapterMainPath = folderPages[0].path

  React.useLayoutEffect(() => {
    if (isDesktop && isFixed) {
      setFixed(false)
    }
  }, [isDesktop, isFixed])

  React.useLayoutEffect(() => {
    function listener() {
      const newTitle = getCurrentTitle() || title
      if (currentTitle !== newTitle) {
        setCurrentTitle(newTitle)
      }

      const rect = containerRef.current!.getBoundingClientRect()
      const top = rect.top + window.pageYOffset

      if (top <= document.documentElement.scrollTop && !isFixed) {
        setFixed(true)
      }

      if (top > document.documentElement.scrollTop && isFixed) {
        setFixed(false)
      }
    }

    document.addEventListener('scroll', listener)

    return () => document.removeEventListener('scroll', listener)
  }, [setCurrentTitle, currentTitle, isDesktop, isFixed, title])

  return (
    <div
      className={cx(
        'section__sidebar',
        'section__sidebar_right',
        'section__sidebar_small-padding',
        'section__sidebar_sticky',
        isDesktop ? 'section__sidebar_desktop' : ''
      )}
    >
      {logo && (
        <div className="section__sidebar_logo">
          <Link to={chapterMainPath} addLocalePrefix={false}>
            <GatsbyImage alt={title} image={logo.gatsbyImageData} />
          </Link>
        </div>
      )}
      <div ref={containerRef} className="section__sidebar-in-wrapper">
        <div
          className={cx(
            'section__sidebar-in',
            logo && 'section__sidebar_sticky',
            isFixed && 'section__sidebar_fixed'
          )}
        >
          <h5 className="content-nav__title">
            <Link
              to={chapterMainPath}
              addLocalePrefix={false}
              className="content-nav__title__link"
            >
              {title}
            </Link>
          </h5>

          <h5
            id="content-nav"
            className={cx(
              'content-nav__title',
              'content-nav__title_small',
              isExpanded ? 'content-nav__title_small_bottom_border' : ''
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {currentTitle}
            <i
              className={cx(
                'fa',
                isExpanded ? 'fa-angle-up' : 'fa-angle-down',
                'content-nav__arrow'
              )}
            />
          </h5>

          <ul
            id="content-nav-list"
            className={cx(
              'content-nav__list',
              isExpanded ? '' : 'content-nav__list_hidden'
            )}
          >
            {folderPages.map(({ title, path }, idx) => {
              const isCurrentPage = currentPath === path

              return (
                <li
                  key={generateKey(title, idx)}
                  className={cx(
                    'content-nav__item',
                    isCurrentPage ? 'content-nav__item_active' : ''
                  )}
                >
                  <Link
                    to={path}
                    addLocalePrefix={false}
                    className="content-nav__link"
                    onClick={isDesktop ? undefined : () => setIsExpanded(false)}
                  >
                    {title}
                  </Link>

                  {isCurrentPage && headings.length !== 0 && (
                    <ol className="content-sublist">
                      {headings
                        .filter(({ depth }) => depth === 2)
                        .map(({ value: headingText }, idx) => (
                          <li
                            key={generateKey(headingText, idx)}
                            className="content-sublist-item content-sublist-level-2"
                          >
                            <Link
                              className={cx(
                                'content-sublist-link',
                                currentTitle === headingText ? 'active' : ''
                              )}
                              to={`#${createHeaderAnchor(headingText)}`}
                              onClick={
                                isDesktop
                                  ? undefined
                                  : () => setIsExpanded(false)
                              }
                            >
                              <span className="content-sublist-text">
                                {headingText}
                              </span>
                            </Link>
                          </li>
                        ))}
                    </ol>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionNavigation

function getCurrentTitle() {
  const titleNodeList = Array.from(document.querySelectorAll('h2')).reverse()

  const currentTitleNode = titleNodeList.find((titleNode) => {
    const rect = titleNode.getBoundingClientRect()
    const nodeTop = rect.top + window.pageYOffset

    return nodeTop <= document.documentElement.scrollTop + 100
  })

  return currentTitleNode ? currentTitleNode.textContent : null
}
