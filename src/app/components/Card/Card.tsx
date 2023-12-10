
// React
import React from 'react'

// Next
import Image from 'next/image'

// Styled components
import { CardContent, CardImage, CardWrapper } from './card.styled'
import { DatePublished, Flex } from '@/app/global.styled'
import { Typography } from '../Typography/Typography'

interface types {
    author: string, 
    karma: number, 
    title: string,
    score: number,
    url: string,
    photo: string,
    alt: string, 
    date: string | null
  }

const Card: React.FC<types> = ({date, author, karma, title, score, url, photo, alt}) => {
    return (
            <a href={url} target="_blank" className="card-link">
        <CardWrapper>
            <CardImage>
                <DatePublished $absolute>{date}</DatePublished>
                <Image src={photo} fill alt={alt} />
            </CardImage>
            <CardContent>
                <div>
                    <Flex $gap={20}>
                        <Typography tag="p" color="#FF3508" $small>Author: {author}</Typography>
                        <Typography tag="p" color="#FF3508" $small>Karma: {karma}</Typography>
                    </Flex>
                    <Typography tag="h2" color="#222222" fontWeight={600} $mtSM={12} $small>{title}</Typography>
                </div>
                    <Flex $justify="space-between">
                        <Typography tag="p" color="#999999" $small>www</Typography>
                        <Typography tag="p" color="#999999" $small>Article score: {score}</Typography>
                    </Flex>
            </CardContent>
        </CardWrapper>
        </a>
    )
}

export default Card