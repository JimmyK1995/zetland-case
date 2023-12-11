// RTL 
import { render, screen, renderHook, waitFor } from '@testing-library/react'

// News
import News from './page'

// Hook
import useFetchStories from '@/app/hooks/useFetchStories'


describe('News page integration tests', () => {

    test('It renders the News page component', () => {
        render(<News />)
    })

    test('Data should return initial values', () => {
        const { result } = renderHook(() => useFetchStories());
        const { stories, featuredStory, loading } = result.current; 

        expect(stories.length).toBe(0);
        expect(featuredStory).toBe(null);
        expect(loading).toBe(true);
    })
})