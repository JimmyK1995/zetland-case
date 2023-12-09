// React
import React from 'react'

// Next
import Image from 'next/image'

// Styled components
import { HeaderContainer, HeaderContent, HeaderWrapper, ArticleScore, FeaturedArticle } from './header.styled'
import { Flex, PrimaryButton, DatePublished } from '@/app/global.styled'
import { Typography } from '../Typography/Typography'

// Assets
import HeaderImage from '../../../../public/landing-header.jpg';

interface types {
  author: string, 
  karma: number, 
  title: string,
  score: number,
  url: string
  date: string | null
}

const Header: React.FC<types> = ({date, author, karma, title, score, url}) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContent>
          <DatePublished>{date}</DatePublished>
          <Flex gap={20}>
            <Typography tag="p">Author: {author}</Typography>
            <Typography tag="p">Karma: {karma}</Typography>
          </Flex>
          <Typography tag="h1" small>{title}</Typography>
          <a href={url} target="_blank">
            <PrimaryButton mt={30}>Read article</PrimaryButton>
            </a>
        </HeaderContent>
      <ArticleScore>Article score: {score}</ArticleScore>
      <FeaturedArticle>Featured article</FeaturedArticle>
      </HeaderContainer>
      <Image 
        fill
        objectFit="cover"
        src={HeaderImage}
        alt="Female sitting on a couch, reading news on her smartphone"
        />
    </HeaderWrapper>
  )
}

export default Header