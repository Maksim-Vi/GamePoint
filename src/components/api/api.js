import json from './news.json'

let url = json

export const getNews = async () =>{
    const response =  await fetch(url)
    const data = await response.json()
    return data
}