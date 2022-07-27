import axios from 'axios';

export const baseUrl = 'http://bayut.p.rapidapi.com';

export const fetchApi = async (url) => { 
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '8a32da2f16mshb0783f4e53973b9p1a395fjsna83e3c377f64',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}