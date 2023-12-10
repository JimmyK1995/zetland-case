// Pexels
import { createClient } from 'pexels';

const APIkey = 'r7fbGFondjkFlaE4oeqDHBiWdngwwt3aoQVqpEQ5qiGDIPKOjvl69KVd';
const client = createClient(APIkey);

export default async function fetchStockPhotos(keyword: string) {

  const query = keyword;
  const orientation = 'landscape';

  try {
    const response = await client.photos.search({ query, orientation, per_page: 1 }) as any;
    const photo = response.photos[0];
    return photo ? photo.src.large : null;
  } catch (error) {
    console.error('Error fetching stock photos:', error);
    return null;
  }
}