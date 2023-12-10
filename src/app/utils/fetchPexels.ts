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

    const photoData = {
      url: photo ? photo.src.large : null,
      alt: photo ? (photo.alt || null) : null,
    };

    return photoData;
  } catch (error) {
    console.error('Error fetching stock photos:', error);
    return null;
  }
}