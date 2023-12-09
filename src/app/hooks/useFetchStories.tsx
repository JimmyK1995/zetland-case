'use client'
// React 
import { useEffect, useState } from "react";

// Utils
import { extractKeywordsSpacy } from "../utils/keywordExtractor";


interface types {
    title: string;
    url: string;
    timestamp: number;
    score: number;
    author: string;
    karma: number;
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
                
                    const keywords = await extractKeywordsSpacy(singleStory.title);

                    const authorRes = await fetch(`https://hacker-news.firebaseio.com/v0/user/${singleStory.by}.json`);
                    const author = await authorRes.json();

                    console.log(keywords, 'tester')
                    return {
                        title: singleStory.title,
                        url: singleStory.url, 
                        timestamp: singleStory.time,
                        score: singleStory.score, 
                        author: author.id, 
                        karma: author.karma,
                        keywords: keywords, 
                    }
                });

                const topStories: any = await Promise.all(getStories)

                const sortedTopStories = topStories.sort((a:any, b:any) => a.score - b.score);
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

    return { stories, featuredStory } 
}

export default useFetchStories;