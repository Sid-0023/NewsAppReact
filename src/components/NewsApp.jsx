import React, { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from './NewsItem'



const NewsApp = ({category}) => {
    const [newsApi, setNewsApi] = useState([])
  useEffect(() => {

    const FetchApiData=async()=>{
        const api=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fd312a446572443eb279c584f3611a51`)
        const data=await api.json()
        console.log(data)
        setNewsApi(data.articles)
    }
    FetchApiData()
    
  }, [category])
  
  return (
    <div>
        <h1 className="text-center">News<span className="badge text-bg-danger">App</span></h1>
        {newsApi.map((news,index)=>{
            return <NewsItem key={index}  title={news.title} description={news.description} image={news.urlToImage} source={news.source.name} date={news.publishedAt} />
        })}
    </div>
  )
   

  

}

export default NewsApp
