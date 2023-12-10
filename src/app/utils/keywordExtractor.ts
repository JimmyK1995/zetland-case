// Axios
import axios from "axios";

// TwinWord
const APIkey = '606fda0212msh44f0046f088eb36p1ea843jsnf582830f7d70'

export async function extractKeywords(title: string) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('text', title);
    
    const options = {
        method: 'POST',
        url: 'https://twinword-topic-tagging.p.rapidapi.com/generate/',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': APIkey,
          'X-RapidAPI-Host': 'twinword-topic-tagging.p.rapidapi.com'
        },
        data: encodedParams,
      };
      try {
        const response = await axios.request(options);
        return response.data;  
    } catch (error) {
        console.error(error);
    }
}