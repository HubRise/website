import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import cx from 'classnames'

import { colors } from '../../constants/theme'

function getRecentPosts (postList) {
  return [...postList].sort((a, b) => a.date - b.date).slice(0, 5)
}

function Sidebar ({ postList, searchQuery, onQueryChange, hideSearchInput }) {
  const [query, setQuery] = useState(searchQuery || '')
  const recentPosts = getRecentPosts(postList)

  const [isRecentPostsExpanded, setRecentPostsExpanded] = useState(true)
  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    const shouldExpandList = window.matchMedia('(min-width: 1024px)').matches

    setRecentPostsExpanded(shouldExpandList)
    setArchiveExpanded(shouldExpandList)
  }, [])

  function handleSearchSubmit (event) {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }
  return (
    <Container>
      {hideSearchInput ? null : (
        <form onSubmit={handleSearchSubmit}>
          <InputContainer>
            <SearchInput
              type='search'
              placeholder='Search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Icon className='fa fa-search' />
          </InputContainer>
        </form>
      )}

      <ListSection>
        <SectionTitle onClick={() => setRecentPostsExpanded((prev) => !prev)}>
          Recent posts{' '}
          <ExpandIcon
            className={cx(
              'fa',
              isRecentPostsExpanded ? 'fa-angle-up' : 'fa-angle-down'
            )}
          />
        </SectionTitle>
        {isRecentPostsExpanded ? (
          <List>
            {recentPosts.map((post) => (
              <ListItem key={post.id}>
                <PostLink to={post.url}>{post.title}</PostLink>
              </ListItem>
            ))}
          </List>
        ) : null}
      </ListSection>

      <ListSection>
        <SectionTitle onClick={() => setArchiveExpanded((prev) => !prev)}>
          Archives{' '}
          <ExpandIcon
            className={cx(
              'fa',
              isRecentPostsExpanded ? 'fa-angle-up' : 'fa-angle-down'
            )}
          />
        </SectionTitle>

        {isArchiveExpanded ? (
          <List>
            <ListItem>
              <PostLink to={'/blog'}>November 2016</PostLink>
            </ListItem>
            <ListItem>
              <PostLink to={'/blog'}>November 2016</PostLink>
            </ListItem>
            <ListItem>
              <PostLink to={'/blog'}>November 2016</PostLink>
            </ListItem>
            <ListItem>
              <PostLink to={'/blog'}>November 2016</PostLink>
            </ListItem>
          </List>
        ) : null}
      </ListSection>
    </Container>
  )
}

const Container = styled.aside`
  flex: 0 0 25%;
  padding: 75px 15px;
  background-color: #fbfbfb;
`

const InputContainer = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  position: relative;
  border-radius: 3px;

  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.4375rem;
  margin: 0 0 1rem;
  padding: 8px 48px 8px 8px;
  border: 1px solid #cacaca;
  background-color: #fefefe;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  font-weight: normal;
  color: #0a0a0a;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid #8a8a8a;
    background-color: #fefefe;
    box-shadow: 0 0 5px #cacaca;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  }
`

const Icon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  background: #6db24f;
  height: 100%;
  width: 40px;
  text-align: center;
  padding-top: 10px;
  color: #fefefe;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
`

const ListSection = styled.div`
  margin-bottom: 32px;
`

const SectionTitle = styled.h5`
  display: block;
  width: 100%;
  position: relative;
  padding-bottom: 1rem;
  color: #cccccc;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;

  &:before {
    border-bottom: 4px solid #ececec;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  @media (min-width: 1024px) {
    cursor: default;

    &:before {
      width: 65%;
    }
  }
`

const ExpandIcon = styled.i`
  color: ${colors.green};
  font-size: 1.3em;
  float: right;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`

const List = styled.ul`
  display: block;
  margin-top: 16px;
`

const ListItem = styled.li`
  display: inline-block;
  width: 100%;
  line-height: 19.2px;
  margin-bottom: 8px;
`

const PostLink = styled(Link)`
  color: #555555;
  font-size: 15px;
  font-weight: 400;
  line-height: 1;

  &:hover {
    color: #6db24f;
  }

  &:focus {
    outline: none;
  }
`

export default Sidebar
