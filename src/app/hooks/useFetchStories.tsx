'use client'
// React 
import { useEffect, useState } from "react";

// Utils
import { extractKeywords } from "../utils/keywordExtractor";
import fetchStockPhotos from "../utils/fetchPexels";

interface types {
    title: string,
    url: string,
    timestamp: number,
    score: number,
    author: string,
    karma: number,
    photoUrl: string, 
    photoAlt: string
}

const useFetchStories = () => {
    const [featuredStory, setFeaturedStory] = useState<types | null>(null)
    const [stories, setStories] = useState<types[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
                const storyIds = await res.json(); 
                const randomized = storyIds.sort(() => Math.random() - 0.5).slice(0, 10)

                const getStories = randomized.map(async (storyId: number) => {
                    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
                    const singleStory = await res.json();
                
                    const keywords = await extractKeywords(singleStory.title);
                    const keywordToSearch = Object.keys(keywords?.keyword || 'architecture')[0];

                    const photoData = await fetchStockPhotos(keywordToSearch);
    
                    const authorRes = await fetch(`https://hacker-news.firebaseio.com/v0/user/${singleStory.by}.json`);
                    const author = await authorRes.json();

                    return {
                        title: singleStory.title,
                        url: singleStory.url, 
                        timestamp: singleStory.time,
                        score: singleStory.score, 
                        author: author.id, 
                        karma: author.karma,
                        keywords: keywords, 
                        photoUrl: photoData?.url,
                        photoAlt: photoData?.alt,
                    }
                });

                const topStories: types[] = await Promise.all(getStories)
                
                const sortedTopStories = topStories.sort((a:types, b:types) => a.score - b.score);
                if (sortedTopStories.length > 0) {
                    setFeaturedStory(topStories[0]);
                }
                setStories(sortedTopStories.slice(1));
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setLoading(false);
              }
        }
    fetchStories();
    }, [])

    return { stories, featuredStory, loading } 
}

export default useFetchStories;