import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants/theme'
import { Link } from 'gatsby'

function Post({
  title,
  imageUrl,
  shortDescription,
  date,
  author,
  url,
  hideReadMoreLink
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <ImageBlock>
          <img src={imageUrl} alt="" />
        </ImageBlock>
        <DescriptionBlock>
          <PostMetaInfo>
            Posted on <DateValue>{date.toLocaleDateString()}</DateValue> by{' '}
            <Author href={'#'}>{author}</Author>
          </PostMetaInfo>
          <ShortDescription>{shortDescription}</ShortDescription>
          {hideReadMoreLink ? null : (
            <ReadMoreLink to={url}>Read More</ReadMoreLink>
          )}
        </DescriptionBlock>
      </Content>
    </Container>
  )
}

const Container = styled.article``

const Title = styled.h3`
  color: ${colors.darkGray};
  font-weight: bold;
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  text-align: left;
  font-size: 34px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: inherit;
    top: 100%;
    margin: 5px auto;
    width: 15%;
    height: 3px;
    background: ${colors.green};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const ImageBlock = styled.div`
  width: 260px;
  height: 160px;

  @media (min-width: 640px) {
    margin-right: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const DescriptionBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 16px;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`

const PostMetaInfo = styled.p`
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`

const DateValue = styled.span`
  color: ${colors.lightGray};
  padding: 0 0.3rem;
`

const Author = styled.a`
  color: ${colors.gray};
  text-decoration: underline;
  padding: 0 0.3rem;
`

const ShortDescription = styled.p`
  color: ${colors.lightGray};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`
const ReadMoreLink = styled(Link)`
  text-align: center;
  color: ${colors.white};
  font-size: 0.9375rem;
  font-weight: 500;
  background: ${colors.gray};
  border-radius: 3px;
  padding: 0.3rem 1.8rem;
  transition: 0.1s ease-in-out;

  &:hover {
    background: ${colors.green};
    color: ${colors.white};
  }
`

export default Post
