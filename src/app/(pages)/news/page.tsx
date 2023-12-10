'use client'
// React
import React from 'react'

// Hooks
import useFetchStories from '@/app/hooks/useFetchStories';

// Components
import Nav from '@/app/components/Nav/Nav';
import Header from '@/app/components/Header/Header';
import Card from '@/app/components/Card/Card';

// Styled components
import { Container } from '@/app/global.styled';
import { NewsContainer, NewsContent } from './news.styled';
import { Typography } from '@/app/components/Typography/Typography';
import { CardFlex } from '@/app/components/Card/card.styled';
import Footer from '@/app/components/Footer/Footer';

const News: React.FC = () => {

  const { stories, featuredStory } = useFetchStories();

  console.log(stories);

  return (
    <>
    <Container>
      <Nav />
      {featuredStory && (
        <Header
          title={featuredStory.title.length > 75 ? `${featuredStory.title.slice(0, 75)}...` : featuredStory.title}
          author={featuredStory.author}
          karma={featuredStory.karma}
          score={featuredStory.score}
          date={new Date(featuredStory.timestamp * 1000).toLocaleDateString('en-GB').replace(/\//g, '.')}
          url={featuredStory.url}
          photo={featuredStory.photoUrl}
        />
      )}
      <NewsContainer>
        <NewsContent>
          <Typography tag="h2" color="#222222" fontWeight={600}>Top stories</Typography>
          <Typography tag="p" color="#222222" mtSM={15} opacity={0.8}>Welcome to “Top Stories,”
            where we curate the most compelling narratives based
            on our rigorous scoring system. Unveiling the pulse of
            trending topics, this section showcases the highest-rated
            tales, ensuring you dive into the most captivating and
            relevant content. Explore a curated selection of the top 10
            stories that have captivated our audience, delivering an immersive
            reading experience.</Typography>
        </NewsContent>
        <CardFlex>
          {stories.map((story, index) => (
            <Card 
              key={index}
              title={story.title.length > 75 ? `${story.title.slice(0, 75)}...` : story.title}
              author={story.author}
              karma={story.karma}
              score={story.score}
              date={new Date(story.timestamp * 1000).toLocaleDateString('en-GB').replace(/\//g, '.')}
              url={story.url}
              photo={story.photoUrl}
               />
          ))}
        </CardFlex>
      </NewsContainer>
    </Container>
    <Footer />
    </>
  )
}

export default News;