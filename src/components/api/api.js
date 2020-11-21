import json from './news.json'

let url = json

export const getNews = async () =>{
    const response =  await fetch('https://maksim-vi.github.io/GamePoint/src/components/api/news.json')
    const data = await response.json()
    return data
}